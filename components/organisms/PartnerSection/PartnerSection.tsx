import Image from "next/image";
import partnerImage from "@/public/grusp.png";
import donateImage from "@/public/donate-image.png";
import DonateBox from "@/components/molecules/DonateBox";

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
            <h3 className="md:text-4xl text-2xl font-bold text-center">
              Please use this if you are interested in donating to the
              community.
            </h3>
          </div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 md:gap-24 gap-y-10 mt-10">
          <div className="md:col-span-3 col-span-1">
            <DonateBox />
          </div>
          <div className="col-span-2 justify-self-center">
            <Image
              src={donateImage}
              alt="Donate Image"
              // width={300}
              className="mb-4 md:w-80 w-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
