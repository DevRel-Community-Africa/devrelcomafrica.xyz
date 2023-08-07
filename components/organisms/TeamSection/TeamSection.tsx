import Card from "@/components/atoms/Card";

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
    <section id="teams" className="bg-primary-light p-8 flex flex-col gap-8">
      <div className="font-semibold text-xl text-left">Meet the Team</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((item, index) => (
          <div key={index}>
            <Card
              name={item.userName}
              role={item.position}
              image={item.imgUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
