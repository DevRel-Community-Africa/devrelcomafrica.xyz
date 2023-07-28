import Button from "@/components/atoms/Button";
import heroImage from "@/public/hero-image.png";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="bg-secondary h-screen">
      <div className="container mx-auto px-4 py-10 h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <h1 className="text-5xl font-heading">
              Fostering the relevance of DevRel across Africa one developer at a
              time
            </h1>
            <div className="mt-8 flex gap-5">
              <Button url="#" label="Join our community" type="primary" />
              <Button
                url="#"
                label="Subscribe to our newsletter"
                type="secondary"
              />
            </div>
          </div>
          <div>
            <Image src={heroImage} alt="DevRel Africa Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
