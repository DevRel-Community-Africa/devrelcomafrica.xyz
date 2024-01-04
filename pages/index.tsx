import Head from "next/head";
import HeroSection from "@/components/organisms/HeroSection";
import Layout from "@/components/layouts";
import StorySection from "@/components/organisms/StorySection";
import TeamSection from "@/components/organisms/TeamSection";
import MissionSection from "@/components/organisms/MissionSection";
import PartnerSection from "@/components/organisms/PartnerSection";
import NewsletterSection from "@/components/organisms/NewsletterSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DevRel Community Africa</title>
      </Head>
      <HeroSection />
      <StorySection />
      <MissionSection />
      <TeamSection />
      <PartnerSection />
      <NewsletterSection />
    </Layout>
  );
}
