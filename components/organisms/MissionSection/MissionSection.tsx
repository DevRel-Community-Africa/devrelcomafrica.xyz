import Image from "next/image";
import blob from "@/public/blob-aesthetic.png";

export function MissionSection(): JSX.Element {
  const missions = [
    {
      id: 1,
      title:
        "Educate more developers and technical writers in Africa about the significance of developer advocacy and how to pursue a career in this field.",
      titleS:
        "Educate about the significance of developer advocacy and how to pursue a career in this field.",
    },
    {
      id: 2,
      title:
        "Organise free workshops and meet-ups to teach important concepts in Developer Relations and Advocacy with guest speakers from top companies around the world.",
      titleS:
        "Organise workshops and meet-ups to teach concepts in Developer Relations and Advocacy.",
    },
    {
      id: 3,
      title:
        "Share DevRel job postings, review CVs and help the community members get ready for interviews.",
      titleS:
        "Share DevRel job postings, review CVs and help the community members get ready for interviews.",
    },
    {
      id: 4,
      title:
        "Collaborate with other existing DevRel communities around the world to share knowledge.",
      titleS:
        "Collaborate with other existing DevRel communities around the world to share knowledge.",
    },
    {
      id: 5,
      title:
        "Encourage African companies to implement a Developer Relations strategy.",
      titleS:
        "Encourage African companies to implement a Developer Relations strategy.",
    },
    {
      id: 6,
      title:
        "Get price discounts on DevRel conferences and courses for community members.",
      titleS:
        "Get price discounts on DevRel conferences and courses for community members.",
    },
  ];

  return (
    <section className="bg-green-100 px-8 py-20 relative" id="mission">
      <div className="container mx-auto px-2 py-2">
        <div className="text-neutral-800 text-[32px] font-semibold">
          The Mission
        </div>
        <div className="mt-6 sm:mt-6 md:mt-8 lg:mt-10 text-[#222] text-lg leading-loose">
          <div className="mt-6 sm:mt-6 md:mt-8 lg:mt-10 text-[#222] text-lg leading-loose">
            Developer Relations is a significant field in the tech industry.
            Despite the high demand for developer relations professionals during
            this time, there has been little adoption and demand for this field
            in Africa, with only a small number of professionals from the
            continent. DevRel Community Africa is a non-profit community that
            aims to bring together developer relations experts and enthusiasts
            from all parts of Africa to share knowledge, support each
            other&apos;s growth and promote the field of developer relations in
            the region.
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 py-2">
        <div className=" mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
          {missions?.map((mission) => (
            <div className="bg-white px-5 pb-5 pt-10" key={mission.id}>
              <hr className=" bg-[#222] h-1 w-[50px]" />
              <div className="w-85 left-0  text-emerald-700  mt-4 md:text-lg text-normal">
                {mission.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={blob}
        alt="Mission bg pattern"
        className="absolute left-0 -bottom-20"
      />
    </section>
  );
}
