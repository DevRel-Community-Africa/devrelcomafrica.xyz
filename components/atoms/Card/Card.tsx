import Image from "next/image";
import Twitter from "@/public/icons/twitter.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Link from "next/link";
import { CardTypes } from "./types";

export function Card({ image, name, role }: CardTypes) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-300 md:w-[22em]">
        <Image
          className="object-cover h-[21em]"
          src={image}
          alt={name}
          width={500}
          height={500}
        />
      </div>
      <div className="flex gap-4">
        <p>{name}</p>
        <div className="flex gap-4">
          <Link href="#">
            <Image src={Twitter} alt="Twitter logo" />
          </Link>
          <Link href="#">
            <Image src={LinkedIn} alt="LinkedIn Logo" />
          </Link>
        </div>
      </div>
      <p className="font-light text-sm">{role}</p>
    </div>
  );
}
