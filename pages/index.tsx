import Image from "next/image";
import HeroSection from "@/components/organisms/HeroSection";
import TeamSection from "@/components/organisms/TeamSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamSection />
    </main>
  );
}
