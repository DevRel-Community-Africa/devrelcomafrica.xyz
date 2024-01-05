import Image from "next/image";
import logo from "@/public/logo.svg";
import Menu from "@/public/menu-icon.svg";
import Close from "@/public/Close.svg";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const menuLinks = [
  {
    label: "Mission",
    url: "/#mission",
  },
  {
    label: "Partners",
    url: "/#partners",
  },
  {
    label: "About us",
    url: "/#about",
  },
  {
    label: "Contact us",
    url: "/#contact",
  },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-secondary">
      <div className="container mx-auto px-8">
        <nav className="flex justify-between items-center ">
          <div>
            <Image
              src={logo}
              alt="DevRelComAfrica Logo"
              className="block"
              width={120}
              height={120}
            />
          </div>
          <div className=" flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className=" lg:hidden block cursor-pointer"
            >
              <Image
                src={open ? Close : Menu}
                alt="menu icon"
                className="w-8 h-6"
              />
            </button>

            <ul
              className={clsx(
                open ? "block" : "hidden",
                "lg:flex justify-between lg:relative absolute lg:bg-transparent bg-secondary left-0 lg:top-0 top-24 lg:w-fit w-full py-8"
              )}
            >
              {menuLinks.map((link, i) => (
                <li key={i} className="px-8 py-2">
                  <Link href={link.url} className="text-lg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
