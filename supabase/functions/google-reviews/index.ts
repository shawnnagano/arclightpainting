const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      return json({ success: false, error: 'GOOGLE_PLACES_API_KEY not configured' }, 500);
    }

    // Use Text Search to find the place
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent("Arclight Painting Bothell WA")}&key=${apiKey}`;

    const searchRes = await fetch(searchUrl);
    const searchBody = await searchRes.text();
    console.log("Search raw response:", searchBody.substring(0, 500));

    let searchData;
    try {
      searchData = JSON.parse(searchBody);
    } catch {
      return json({ success: false, error: 'Invalid response from Google API', raw: searchBody.substring(0, 200) }, 500);
    }

    if (searchData.status === 'REQUEST_DENIED') {
      return json({ success: false, error: `Google API denied: ${searchData.error_message || 'Enable Places API in Google Cloud Console'}` }, 403);
    }

    if (searchData.status !== 'OK' || !searchData.results?.length) {
      return json({ success: false, error: `Search failed: ${searchData.status}`, details: searchData.error_message }, 404);
    }

    const placeId = searchData.results[0].place_id;
    console.log("Found place_id:", placeId);

    // Get details with reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    if (detailsData.status !== 'OK') {
      return json({ success: false, error: `Details failed: ${detailsData.status}`, details: detailsData.error_message }, 500);
    }

    const result = detailsData.result;

    return json({
      success: true,
      data: {
        name: result.name,
        rating: result.rating,
        totalReviews: result.user_ratings_total,
        reviews: (result.reviews || []).map((r: any) => ({
          name: r.author_name,
          rating: r.rating,
          text: r.text,
          date: r.relative_time_description,
          time: r.time,
          profilePhoto: r.profile_photo_url,
        })),
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, 500);
  }
});
