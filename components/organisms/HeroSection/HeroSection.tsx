/* eslint-disable prettier/prettier */
import AnimatedElement from "@/components/animations/AnimateElement";
import Button from "@/components/atoms/Button";
import heroImage from "@/public/hero-image.png";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-8 py-10">
        <div className="flex lg:flex-row flex-col items-center gap-14 h-full mt-24">
          <AnimatedElement>
            <div className="">
              <h1 className="lg:text-5xl text-3xl font-heading font-bold">
                Fostering the relevance of developer relations across Africa one
                developer at a time
              </h1>

              <div className="mt-8 flex lg:flex-row flex-col gap-5 text-center">
                <Button
                  url="https://devrelcommunityafrica.slack.com/join/shared_invite/zt-12xmpb6jn-YAkjlxZqYNdu1GSMWQz_DA#/shared-invite/email"
                  label="Join our community"
                  type="primary"
                />
                <Button
                  url="https://tinyletter.com/DevelopByDevRelCom"
                  label="Subscribe to our newsletter"
                  type="secondary"
                />
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={1}>
            <div className="lg:block ">
              <Image src={heroImage} alt="DevRel Africa Image" />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
