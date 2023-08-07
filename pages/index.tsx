import Image from "next/image";
import HeroSection from "@/components/organisms/HeroSection";
import TeamSection from "@/components/organisms/TeamSection";
import Layout from "@/components/layouts";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <TeamSection />
      </main>
    </Layout>
  );
}
