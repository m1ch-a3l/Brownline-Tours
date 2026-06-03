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

  return <TourDetailClient tour={tour} related={related} />;
}
