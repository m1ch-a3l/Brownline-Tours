import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allTours as tours } from "@/lib/data";
import TourDetailClient from "./TourDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tours.map((t) => ({ id: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tour = tours.find((t) => t.slug === id);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.title,
    description: tour.description.slice(0, 160),
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: tour.title,
      description: tour.description.slice(0, 160),
      images: [{ url: tour.image }],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { id } = await params;
  const tour = tours.find((t) => t.slug === id);
  if (!tour) notFound();

  const related = tours.filter((t) => t.category === tour.category && t.id !== tour.id).slice(0, 3);

  const siteUrl = "https://brownlinetours.com";
  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    image: tour.gallery,
    touristType: tour.category,
    itinerary: tour.itinerary.map((day) => ({
      "@type": "TouristAttraction",
      name: day.title,
      description: day.description,
    })),
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/tours/${tour.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviewCount,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Tours", item: `${siteUrl}/tours` },
      { "@type": "ListItem", position: 3, name: tour.title, item: `${siteUrl}/tours/${tour.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TourDetailClient tour={tour} related={related} />
    </>
  );
}
