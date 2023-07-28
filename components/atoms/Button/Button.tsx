import Link from "next/link";
import clsx from "clsx";

import { ButtonTypes } from "./types";

export function Button({ label, url, type }: ButtonTypes) {
  const className = clsx(
    {
      "bg-primary text-white border-primary": type === "primary",
    },
    {
      "bg-secondary text-black border-primary": type === "secondary",
    },
    "rounded-lg border-solid border py-3 px-4 font-medium",
  );
  return (
    <Link href={url} className={className}>
      {label}
    </Link>
  );
}
