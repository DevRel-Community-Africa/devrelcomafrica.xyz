import Card from "@/components/atoms/Card";
import alexis from "@/public/Alexis.png";
import shedrack from "@/public/shedrack.png";
import Image from "next/image";
import Link from "next/link";

const teamData = [
  {
    userName: "Shedrack Akintayo",
    position: "Founder",
    imgUrl: "/shedrack.png",
  },
  {
    userName: "Seunbayo Adebayo",
    position: "Advocacy",
    imgUrl: "",
  },
  {
    userName: "Amarachi Iheanacho",
    position: "Technical Writer",
    imgUrl: "",
  },
  {
    userName: "Damilola Ezekiel",
    position: "Technical Writer",
    imgUrl: "",
  },
  {
    userName: "Alexis Abakasanga",
    position: "Designer",
    imgUrl: "/alexis.png",
  },
];
export function TeamSection() {
  return (
    <section id="teams" className="bg-[#E4F4E9] p-8 flex flex-col gap-8">
      <div className="font-semibold text-xl text-left">Meet the Team</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((item, index) => (
          <div key={index}>
            <Card
              title={item.userName}
              position={item.position}
              imgSource={item.imgUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
