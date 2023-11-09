import Image from "next/image";
import blob from "@/public/blob.png";

export function StorySection() {
  return (
    <section className="bg-secondary px-8 py-20 relative">
      <div className="container mx-auto px-2 py-2">
        <h2 className="text-neutral-800 text-[32px] font-semibold">
          The story
        </h2>
        <hr className="w-[156px] h-0.5 bg-primary" />
        <div>
          <p className="mt-10 font-normal text-[#222222] text-[24px] leading-[normal] pt-2 z-10 relative">
            <span className="font-light">
              Five years ago when I was starting out my tech journey in Nigeria,
              there was no structured way of learning how to code or design,
              there was no code bootcamps or physical learning platforms for
              people that want to learn how to code. Asides from the fact that
              there was no structured way of learning, the online courses
              available were so expensive for most of us so we had to teach each
              other, share free resources with each other and debug together.
              This was my first experience with a “
            </span>
            <span className="font-medium">community</span>
            <span className="font-light">
              ”, we learnt from each other and helped each other grow. Today a
              lot of us that were part of the community over the years have gone
              so far in our careers and we wouldn&#39;t have been able to
              achieve so much without the community. This is the importance of
              having a community of like-minded people supporting you and also
              helping you grow.
            </span>
          </p>
        </div>
      </div>
      <Image
        src={blob}
        className="absolute right-0 bottom-2"
        alt="BG-pattern"
        width={400}
      />
    </section>
  );
}
