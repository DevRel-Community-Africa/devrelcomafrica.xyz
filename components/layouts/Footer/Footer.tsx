import Link from "next/link";
import Image from "next/image";

import slackLogo from "@/public/slack.svg";
import mailLogo from "@/public/mail.svg";
import xLogo from "@/public/x.svg";
import logo from "@/public/logo.svg";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-8 py-10">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-4 ">
              <Link href="" target="_blank" rel="noopener noreferrer">
                <Image src={slackLogo} alt="Slack Icon" className="w-7 h-7" />
              </Link>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <Image src={xLogo} alt="X Icon" className="w-6 h-6" />
              </Link>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <Image src={mailLogo} alt="Mail Icon" className="w-7 h-7" />
              </Link>
            </div>
            <p className="text-sm text-gray-400 my-6">
              Copyright DevRel Community Africa. All rights reserved.
            </p>
          </div>

          <Image src={logo} alt="DevRel Community Africa Logo" />
        </div>
      </div>
    </footer>
  );
}
