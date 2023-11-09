import Image from "next/image";
import partnerImage from "@/public/grusp.png";
import donateImage from "@/public/donate-image.png";
import DonateBox from "@/components/atoms/DonateBox";

export function PartnerSection() {
  return (
    <section className="bg-secondary px-8 py-20 relative">
      <div className="container mx-auto px-2 py-2">
        <h2 className="text-neutral-800 text-[32px] font-semibold">
          Our Partners
        </h2>
        <hr className="w-[156px] h-0.5 bg-primary" />
        <div className="flex flex-col items-center">
          <Image
            src={partnerImage}
            alt="Grusp Company Logo"
            width={300}
            className="mb-4"
          />
          <div className=" w-4/6 mt-6">
            <h3 className="text-4xl font-bold text-center">
              Please use this if you are interested in donating to the
              community.
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <DonateBox />
          <div>
            <Image
              src={donateImage}
              alt="Donate Image"
              width={300}
              className="mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
