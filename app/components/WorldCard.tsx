import Image from "next/image";
import Link from "next/link";

export type WorldCardProps = {
  title: string;
  subtitle: string;
  image: string;
  index: number;
  link: string;
};

export default function WorldCard({
  title,
  subtitle,
  image,
  index,
  link,
}: WorldCardProps): React.JSX.Element {
  return (
    <Link
      href={link}
      className="group relative block h-48 overflow-hidden rounded-xl"
    >
      <Image
        height={300}
        width={300}
        src={image}
        alt={title}
        priority={index < 2}
        className="h-full w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-3 left-3 text-white">
        <p className="font-serif text-lg italic">{title}</p>
        <p className="text-xs">{subtitle}</p>
      </div>
    </Link>
  );
}
