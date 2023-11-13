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
      <HeroSection />
      <StorySection />
      <MissionSection />
      <TeamSection />
      <PartnerSection />
      <NewsletterSection />
    </Layout>
  );
}
