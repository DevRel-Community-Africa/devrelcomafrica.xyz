import Image from "next/image";
import HeroSection from "@/components/organisms/HeroSection";
import Layout from "@/components/layouts";
import MissionSection from "@/components/organisms/MissionSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
    </Layout>
  );
}
