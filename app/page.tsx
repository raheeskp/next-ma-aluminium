import HeroCarousel from "@/components/HeroCarousel";
import Features from "@/components/Features";
import About from "@/components/About";
import Products from "@/components/Products";
import FeatureDetails from "@/components/FeatureDetails";
import Quote from "@/components/Quote";
import TeamMembers from "@/components/TeamMembers";

export default function Page() {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <About />
      <Products />
      <FeatureDetails />
      <Quote />
      <TeamMembers />
    </div>
  );
}
