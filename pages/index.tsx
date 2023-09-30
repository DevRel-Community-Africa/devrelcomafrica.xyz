import Image from "next/image";
import HeroSection from "@/components/organisms/HeroSection";
import { StorySection } from "@/components/organisms/StorySection/StorySection";
import { TeamSection } from "@/components/organisms/TeamSection/TeamSection";
import Layout from "@/components/layouts";
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StorySection />
      <TeamSection />
    </Layout>
  );
}
