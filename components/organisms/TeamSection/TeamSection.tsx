import Image from "next/image";
import NameBox from "@/components/atoms/NameBox";
import shedrack from "@/public/shedrack.png";
import alexis from "@/public/alexis.png";
import seunbayo from "@/public/placeholder.png";
import damilola from "@/public/placeholder.png";
import amarachi from "@/public/placeholder.png";
export function TeamSection() {
  return (
    <section className="bg-green-100 py-6">
      <div className="container mx-auto p-4">
        <div className="text-neutral-800 text-[32px] space-y-4 font-semibold">
          Meet the Team
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pt-5">
          <div className="">
            <Image src={shedrack} alt="Shedrack Akintayo" />
            <NameBox
              name="Shedrack Akintayo"
              position="Founder"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div>
          <div className="">
            <Image src={seunbayo} alt="Seunbayo Adebayo" />
            <NameBox
              name="Seunbayo Adebayo"
              position="Advocacy"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div>
          <div className="">
            <Image src={amarachi} alt="Amarachi Iheanacho" />
            <NameBox
              name="Amarachi Iheanacho"
              position="Technical Writer"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div>
          <div className="">
            <Image src={damilola} alt="Damilola Ezekiel" />
            <NameBox
              name="Damilola Ezekiel"
              position="Technical Writer"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div>
          <div className="">
            <Image src={alexis} alt="Alexis Abakasanga" />
            <NameBox
              name="Alexis Abakasanga"
              position="Designer"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
