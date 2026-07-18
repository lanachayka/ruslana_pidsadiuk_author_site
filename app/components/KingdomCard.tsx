import Image from "next/image";
import React from "react";

export type CardProps = {
  id: string;
  title: string;
  imageUrl: string;
};

export default function KingdomCard({
  id,
  title,
  imageUrl,
}: CardProps): React.JSX.Element {
  return (
    <div className="w-full max-w-sm rounded-md bg-[#E8EFE0]/60 backdrop-blur-sm border border-[#8FA087]/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center space-y-3 min-h-100">
      <p className="text-lg h-15 text-center">{title}</p>
      <Image
        width={id === "map" ? 350 : 250}
        height={250}
        src={imageUrl}
        alt={title}
      />
    </div>
  );
}
