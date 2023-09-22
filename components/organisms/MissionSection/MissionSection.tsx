import Image from "next/image";

export function MissionSection() {
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
    <section className="bg-green-100 py-10">
      <div className="container mx-auto px-2 py-2">
        <div className="text-neutral-800 text-[32px] font-semibold">
          The Mission
        </div>
        <div className="mt-6 sm:mt-6 md:mt-8 lg:mt-10 text-neutral-600 text-sm font-[300] sm:text-lg md:text-xl lg:text-2xl font-normal">
          Developer Relations is a significant field in the tech industry.
          Despite the high demand for developer relations professionals during
          this time, there has been little adoption and demand for this field in
          Africa, with only a small number of professionals from the continent.
          DevRel Community Africa is a non-profit community that aims to bring
          together developer relations experts and enthusiasts from all parts of
          Africa to share knowledge, support each other&apos;s growth and
          promote the field of developer relations in the region.
        </div>
      </div>
      <div className="container mx-auto px-2 py-2">
        <div className=" mt-6 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          {missions &&
            missions.map((mission) => (
              <div
                className="bg-[#FFF] p-2 h-[120px] sm:h-[300px] md:h-[250px] lg:h-[300px] xl:h-[280px]"
                key={mission.id}
              >
                <div className=" mt-2 mb-6 w-12 h-px left-0 top-0 border border-gray-400"></div>
                <div className="hidden sm:block w-85 left-0 top-[16px] text-emerald-700 text-[10px] font-[8] sm:text-xl md:text-xl lg:text-2xl font-normal">
                  {mission.title}
                </div>
                <div className="block sm:hidden w-85 left-0 top-[16px] text-emerald-700 text-[10px] font-[8] sm:text-xl md:text-xl lg:text-2xl font-normal">
                  {mission.titleS}
                </div>
              </div>
            ))}
        </div>
        {/* <div className="mt-12 flex flex-col sm:flex-row gap-10">
          <Image
            src="/blob-aesthetic.png"
            alt="DevRel Africa Icon"
            width={580}
            height={500}
            className="block sm:top-[540px] left-0 md:top-[540px] left-0 lg:top-[540px] left-0 xl:top-[480px] left-0"
          />
        </div> */}
      </div>
    </section>
  );
}
