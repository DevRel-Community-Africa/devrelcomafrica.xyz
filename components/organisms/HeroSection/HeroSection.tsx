import heroImage from "@/public/hero-image.png";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="bg-secondary h-screen">
      <div className="container mx-auto px-4 py-10 h-full">
        <div className="flex justify-between items-center h-full">
          <h1 className="text-5xl font-heading">
            Fostering the relevance of DevRel across Africa one developer at a
            time
          </h1>
          <div>
            <Image
              src={heroImage}
              alt="DevRel Africa Image"
              // width={551}
              // height={491}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
