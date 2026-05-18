import Banner from "@/components/home/Banner";
import StatsSection from "@/components/home/StatsSection";
import SuccessStories from "@/components/home/SuccessStories";
import WhyAdoptSection from "@/components/home/WhyAdoptSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <StatsSection />
      <WhyAdoptSection/>
      <SuccessStories/>
    </div>
  );
}
