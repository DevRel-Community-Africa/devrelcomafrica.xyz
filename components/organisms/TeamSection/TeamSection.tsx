import alexis from "@/public/Alexis.png";
import shedrack from "@/public/shedrack.png";
import Link from "next/link";

const teamData = [
  {
    userName: "Shedrack Akintayo",
    position: "Founder",
    imgUrl: "shedrack.png",
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
    imgUrl: "alexis.png",
  },
];
export default function TeamSection() {
  function Card({ imgSource, title, position }) {
    return (
      <div className="flex flex-col gap-2">
        <div className="bg-[#99999980] h-[21em] md:w-[22em]">
          <img className="object-cover h-[21em]" src={imgSource} alt="" />
        </div>
        <div className="flex gap-4">
          <p>{title}</p>
          <div className="flex gap-4">
            <Link href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                  stroke="#222222"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="#222222"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="#222222"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="#222222"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <p className="font-light text-sm">{position}</p>
      </div>
    );
  }
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
