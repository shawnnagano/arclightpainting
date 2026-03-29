const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'Google Places API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Try multiple search approaches to find the place
    let placeId: string | null = null;

    // Approach 1: Text Search API (more reliable)
    const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent("Arclight Painting 10026 Main St Bothell WA")}&key=${apiKey}`;
    console.log("Trying text search...");
    const textSearchRes = await fetch(textSearchUrl);
    const textSearchData = await textSearchRes.json();
    console.log("Text search response status:", textSearchData.status, "results:", textSearchData.results?.length);

    if (textSearchData.status === 'OK' && textSearchData.results?.length > 0) {
      placeId = textSearchData.results[0].place_id;
      console.log("Found place_id via text search:", placeId);
    }

    // Approach 2: Find Place if text search failed
    if (!placeId) {
      const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent("Arclight Painting")}&inputtype=textquery&locationbias=point:47.7076689,-122.1880865&fields=place_id,name&key=${apiKey}`;
      console.log("Trying find place...");
      const findRes = await fetch(findUrl);
      const findData = await findRes.json();
      console.log("Find place response:", JSON.stringify(findData));

      if (findData.candidates?.length > 0) {
        placeId = findData.candidates[0].place_id;
      }
    }

    if (!placeId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Place not found. Make sure Places API is enabled in your Google Cloud Console.' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get place details with reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();
    console.log("Details response status:", detailsData.status);

    if (detailsData.status !== 'OK') {
      return new Response(
        JSON.stringify({ success: false, error: `Google API error: ${detailsData.status}. Make sure Places API is enabled.` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = detailsData.result;

    return new Response(
      JSON.stringify({
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
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch reviews' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
