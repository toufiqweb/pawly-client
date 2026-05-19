import Banner from "@/components/home/Banner";
import FAQSection from "@/components/home/FAQSection";
import FeaturedPets from "@/components/home/FeaturedPets";
import HealthSafetySection from "@/components/home/HealthSafetySection";
import PetCareServices from "@/components/home/PetCareServices";
import StatsSection from "@/components/home/StatsSection";
import SuccessStories from "@/components/home/SuccessStories";
import WhyAdoptSection from "@/components/home/WhyAdoptSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <StatsSection />
      <FeaturedPets />
      <WhyAdoptSection/>
      <SuccessStories/>
      <FAQSection/>
      <PetCareServices/>
      <HealthSafetySection/>
    </div>
  );
}
