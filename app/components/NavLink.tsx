"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  path: string;
  name: string;
};

export default function NavLink({
  path,
  name,
}: NavLinkProps): React.JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`
        relative tracking-wide transition-colors duration-300
        text-[#1F2622]
        ${!isActive && "hover:text-[#dde5d3]"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:bg-[#dde5d3]
        after:transition-all after:duration-300
        text-xl
        ${isActive ? "after:w-full text-[#dde5d3]" : "after:w-0 hover:after:w-full"}
      `}
    >
      {name}
    </Link>
  );
}
