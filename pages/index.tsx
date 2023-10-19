import Image from "next/image";
import HeroSection from "@/components/organisms/HeroSection";
import Layout from "@/components/layouts";
import { StorySection } from "@/components/organisms/StorySection/StorySection";
import { TeamSection } from "@/components/organisms/TeamSection/TeamSection";
import MissionSection from "@/components/organisms/MissionSection";


export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StorySection />
      <MissionSection />
      <TeamSection />
    </Layout>
  );
}
