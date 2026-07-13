"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export type CardProps = {
  id: string;
  imageUrl: string;
  index: number;
};

export default function StoryCard({
  id,
  imageUrl,
  index,
}: CardProps): React.JSX.Element {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/books/${id}`)}
      key={id}
      className="h-72 min-w-[240px] overflow-hidden rounded-xl shadow-md"
    >
      <Image
        height={300}
        width={300}
        src={imageUrl}
        alt=""
        priority={index < 2}
        className="h-full w-full object-cover transition duration-500 hover:scale-105 cursor-pointer"
      />
    </div>
  );
}
