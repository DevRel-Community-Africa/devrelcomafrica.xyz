import Image from "next/image";
import HeroSection from "@/components/organisms/HeroSection";
import { StorySection } from "@/components/organisms/StorySection/StorySection";
import { TeamSection } from "@/components/organisms/TeamSection/TeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <TeamSection />
    </main>
  );
}
