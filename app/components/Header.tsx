"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";

export default function Header(): React.JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const goHomeIfNotThere = () => {
    if (pathname !== "/") router.push("/");
  };

  return (
    <header
      role="banner"
      aria-label="Site header"
      className="fixed top-0 left-0 w-full h-16 px-4 flex items-center justify-between z-50
        bg-[#8FA087]
        backdrop-blur-md 
        border-b border-[#505A46]/20 
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center">
        <div
          onClick={goHomeIfNotThere}
          role="button"
          tabIndex={0}
          className="w-10 h-10 rounded-full overflow-hidden mr-3 relative flex-shrink-0 cursor-pointer"
        >
          <Image
            src="/author_photo.JPG"
            alt="Author photo"
            fill
            className="object-cover"
          />
        </div>
        <p
          onClick={goHomeIfNotThere}
          role="button"
          tabIndex={0}
          className="text-xl hidden md:block cursor-pointer select-none"
        >
          Ruslana Pidsadiuk
        </p>
      </div>
      <div className="flex space-x-6">
        <NavLink path="/books" name="Books" />
        <NavLink path="/about" name="About the Author" />
      </div>
    </header>
  );
}
