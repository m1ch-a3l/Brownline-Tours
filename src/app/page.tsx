import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import SignatureExperiencesSection from "@/components/sections/SignatureExperiencesSection";
import FeaturedToursSection from "@/components/sections/FeaturedToursSection";
import BrowseByRegionSection from "@/components/sections/BrowseByRegionSection";
import InteractiveMapSection from "@/components/sections/InteractiveMapSection";
import ImmersiveExperiencesSection from "@/components/sections/ImmersiveExperiencesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SignatureExperiencesSection />
      <FeaturedToursSection />
      <BrowseByRegionSection />
      <InteractiveMapSection />
      <ImmersiveExperiencesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BlogPreviewSection />
    </>
  );
}
