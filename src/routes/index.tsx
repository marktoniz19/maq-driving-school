import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Pricing } from "@/components/site/Pricing";
import { Areas } from "@/components/site/Areas";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

const SITE_URL = "https://maqdriving.co.uk";
const OG_IMAGE = `${SITE_URL}/og-image.webp`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "MAQ Driving Instructor",
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: "+44 7459 139318",
  email: "hello@maqdriving.co.uk",
  priceRange: "££",
  description:
    "Professional, patient and affordable driving lessons in Reading, Slough and Wokingham. Block booking discounts available.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Reading",
    addressRegion: "Berkshire",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Reading" },
    { "@type": "City", name: "Slough" },
    { "@type": "City", name: "Wokingham" },
  ],
  geo: { "@type": "GeoCoordinates", latitude: 51.4543, longitude: -0.9781 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "120",
  },
  sameAs: [],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MAQ Driving Instructor | Driving Lessons Reading, Slough & Wokingham" },
      {
        name: "description",
        content:
          "Friendly, professional driving lessons across Reading, Slough and Wokingham. Beginner-friendly, flexible bookings, block discounts. Call 07459 139318.",
      },
      { name: "keywords", content: "driving lessons Reading, driving instructor Slough, driving school Wokingham, manual driving lessons Berkshire, learn to drive Reading" },
      { name: "author", content: "MAQ Driving Instructor" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB-WBK" },
      { name: "geo.placename", content: "Reading, Slough, Wokingham" },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MAQ Driving Instructor" },
      { property: "og:title", content: "MAQ Driving Instructor – Pass with Confidence" },
      { property: "og:description", content: "Calm, professional driving lessons in Reading, Slough & Wokingham. Block booking discounts available." },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "768" },
      { property: "og:image:height", content: "576" },
      { property: "og:image:alt", content: "MAQ Driving Instructor branded learner car" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MAQ Driving Instructor – Reading, Slough & Wokingham" },
      { name: "twitter:description", content: "Professional driving lessons across Berkshire. Book today." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Areas />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
