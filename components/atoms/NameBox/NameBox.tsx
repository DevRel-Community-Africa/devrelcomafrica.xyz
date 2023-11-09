import React from "react";
import { NameBoxTypes } from "./types";
import Image from "next/image";
import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";
import Link from "next/link";

export function NameBox({
  name,
  position,
  linkedinUrl,
  twitterUrl,
}: NameBoxTypes) {
  return (
    <div className="container">
      <div className="pt-5">
        <p className="font-medium text-[#222222]  tracking-[0] leading-loose text-lg whitespace-nowrap">
          {name}
        </p>
        <div className="">
          <div className="flex space-x-2">
            <div className="">
              <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <Image src={twitter} alt="twitter icon" />
              </Link>
            </div>
            <div className="">
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="linkedin icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-2 font-light text-lg whitespace-nowrap">{position}</p>
      </div>
    </div>
  );
}
