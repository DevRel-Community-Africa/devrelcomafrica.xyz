import Image from "next/image";
import NameBox from "@/components/atoms/NameBox";
import shedrack from "@/public/shedrack.png";
import alexis from "@/public/alexis.png";
import seunbayo from "@/public/bayo.png";
import damilola from "@/public/Damilola.jpeg";
import amarachi from "@/public/placeholder.png";
import jamin from "@/public/jamin.png";

export function TeamSection() {
  return (
    <section className="bg-green-100 px-8 py-20 " id="about">
      <div className="container mx-auto">
        <div className="text-neutral-800 text-[32px] space-y-4 font-semibold">
          Meet the Team
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pt-5">
          <div>
            <Image src={shedrack} alt="Shedrack Akintayo" />
            <NameBox
              name="Shedrack Akintayo"
              position="Founder"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div>
          <div>
            <Image src={jamin} alt="Trust Jamin" />
            <NameBox
              name="Trust Jamin"
              position="Engineering"
              linkedinUrl="https://linkedin.com/in/0xjamin"
              twitterUrl="https://twitter.com/0xJamin"
            />
          </div>
          <div>
            <Image src={seunbayo} alt="Seunbayo Adebayo" />
            <NameBox
              name="Seunbayo Adebayo"
              position="Advocacy"
              linkedinUrl="https://www.linkedin.com/in/seunbayo/"
              twitterUrl="https://twitter.com/seunbayong"
            />
          </div>
          {/* <div>
            <Image src={amarachi} alt="Amarachi Iheanacho" />
            <NameBox
              name="Amarachi Iheanacho"
              position="Technical Writer"
              linkedinUrl="https://linkedin.com/in/shedrackakintayo"
              twitterUrl="https://twitter.com/coder_blvck"
            />
          </div> */}
          <div>
            <Image src={damilola} alt="Damilola Ezekiel" />
            <NameBox
              name="Damilola Ezekiel"
              position="Technical Writer"
              linkedinUrl="https://www.linkedin.com/in/damilola-ezekiel"
              twitterUrl="https://twitter.com/damiezekiel_"
            />
          </div>
          <div>
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
