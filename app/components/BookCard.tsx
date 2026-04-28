"use client";

import Image from "next/image";
import React from "react";
import LinkButton from "./LinkButton";
import { useRouter } from "next/navigation";

export type CardProps = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  amazonUrl: string;
};

export default function BookCard({
  id,
  title,
  subtitle,
  imageUrl,
  amazonUrl,
}: CardProps): React.JSX.Element {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/books/${id}`)}
      className="cursor-pointer w-full max-w-sm rounded-md bg-[#E8EFE0]/60 backdrop-blur-sm border border-[#8FA087]/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center space-y-3"
    >
      <Image width={150} height={100} src={imageUrl} alt={title} />
      <h3 className="text-lg font-bold">{title}</h3>
      {subtitle && <p className="text-center">{subtitle}</p>}
      <div onClick={(e) => e.stopPropagation()}>
        <LinkButton href={amazonUrl}>Read on Amazon</LinkButton>
      </div>
    </div>
  );
}
