import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const SITE_URL = "https://arclightpainting.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEOHead = ({ title, description, canonical, ogImage, ogType = "website", jsonLd }: SEOHeadProps) => {
  const fullTitle = title.includes("Arclight") ? title : `${title} | Arclight Painting`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;
  const image = ogImage || DEFAULT_OG_IMAGE;

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Arclight Painting" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo */}
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Bothell" />

      {/* JSON-LD */}
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

// Shared JSON-LD schemas
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": "https://arclightpainting.com/#business",
  name: "Arclight Painting",
  image: "https://arclightpainting.com/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png",
  url: "https://arclightpainting.com",
  telephone: "+14257571199",
  email: "info@arclightpainting.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9906 NE 204th Place",
    addressLocality: "Bothell",
    addressRegion: "WA",
    postalCode: "98011",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.7601,
    longitude: -122.2054,
  },
  priceRange: "$$",
  foundingDate: "2013",
  slogan: "Real People. Real Purpose. Exceptional Results.",
  award: "Veteran-Owned Business",
  founder: [
    { "@id": "https://arclightpainting.com/about#shawn-nagano" },
    { "@id": "https://arclightpainting.com/about#jennifer-pattison" },
  ],
  paymentAccepted: "Cash, Check, Credit Card, Financing",
  currenciesAccepted: "USD",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Washington State Contractor License",
    identifier: "ARCLIP*747DW",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "Washington State Department of Labor & Industries",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "269",
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:30",
  },
  areaServed: [
    "Bothell", "Kirkland", "Redmond", "Cottage Lake", "Kenmore",
    "Mill Creek", "Bellevue", "Union Hill-Novelty Hill", "Clearview",
    "Everett", "Lake Forest Park", "Woodinville",
  ].map(name => ({ "@type": "City", name, "@id": `https://arclightpainting.com/${name.toLowerCase().replace(/\s+/g, "-")}` })),
  sameAs: [
    "https://maps.app.goo.gl/Q3E8cyNn3tbnnqkC9",
    "https://www.facebook.com/arclightpainting/",
    "https://www.yelp.com/biz/arclight-painting-bothell",
    "https://www.linkedin.com/company/arclightpainting/",
    "https://www.instagram.com/arclightpainting/",
    "https://www.bbb.org/us/wa/bothell/profile/painting-contractors/arclight-painting-llc-1296-1000057322",
    "https://www.angi.com/companylist/us/wa/bothell/arclight-painting-reviews-10518198.htm",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Refinishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Painting" } },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arclight Painting",
  url: "https://arclightpainting.com",
};

// Owner / Person schemas — tied to the business via worksFor / founder
export const shawnNaganoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://arclightpainting.com/about#shawn-nagano",
  name: "Shawn Nagano",
  jobTitle: "Founder & CEO",
  worksFor: { "@id": "https://arclightpainting.com/#business" },
  image: "https://arclightpainting.com/images/wp-content/2025/06/Shawn-Arclight-Painting-Bothell-WA.png",
  url: "https://arclightpainting.com/about",
  knowsAbout: [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Refinishing",
    "Color Consultation",
    "Residential Painting",
    "Commercial Painting",
  ],
  sameAs: ["https://www.linkedin.com/in/shawn-nagano/"],
};

export const jenniferPattisonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://arclightpainting.com/about#jennifer-pattison",
  name: "Jennifer Pattison",
  jobTitle: "Co-Founder, Business Development",
  worksFor: { "@id": "https://arclightpainting.com/#business" },
  url: "https://arclightpainting.com/about",
  knowsAbout: [
    "Customer Experience",
    "Business Development",
    "Residential Painting Consultations",
  ],
  sameAs: ["https://www.linkedin.com/in/jennifer-pattison-48950865/"],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arclight Painting",
  url: "https://arclightpainting.com",
  logo: "https://arclightpainting.com/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-425-757-1199",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "9906 NE 204th Place",
    addressLocality: "Bothell",
    addressRegion: "WA",
    postalCode: "98011",
    addressCountry: "US",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://arclightpainting.com${item.url}`,
  })),
});

export const serviceSchema = (name: string, description: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `https://arclightpainting.com/services/${slug}`,
  provider: {
    "@type": "HousePainter",
    name: "Arclight Painting",
    "@id": "https://arclightpainting.com/#business",
  },
  areaServed: {
    "@type": "State",
    name: "Washington",
  },
});

export const faqPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const serviceAreaSchema = (areaName: string, slug: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `House Painting in ${areaName}, WA`,
  description,
  url: `https://arclightpainting.com/${slug}`,
  provider: {
    "@type": "HousePainter",
    name: "Arclight Painting",
    "@id": "https://arclightpainting.com/#business",
  },
  areaServed: {
    "@type": "City",
    name: areaName,
    containedInPlace: {
      "@type": "State",
      name: "Washington",
    },
  },
});

export const articleSchema = (title: string, description: string, slug: string, datePublished: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image,
  datePublished,
  url: `https://arclightpainting.com/${slug}`,
  author: {
    "@type": "Organization",
    name: "Arclight Painting",
    url: "https://arclightpainting.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Arclight Painting",
    logo: {
      "@type": "ImageObject",
      url: "https://arclightpainting.com/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://arclightpainting.com/${slug}`,
  },
});
