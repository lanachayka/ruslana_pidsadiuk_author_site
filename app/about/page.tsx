import { SocialMediaLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Divider from "../components/Divider";
import PageTitle from "../components/PageTitle";
import PageSubtitle from "../components/PageSubtitle";

export default function About() {
  return (
    <div className="flex-col items-center space-y-4">
      <PageTitle title="About the Author" />
      <div className="flex items-center flex-col md:flex-row gap-6">
        <Image
          src="/author_photo.JPG"
          alt="Author Portrait"
          width={150}
          height={150}
          className="object-cover rounded-full"
        />
        <div className="space-y-4">
          <p className="leading-loose">
            Ruslana Pidsadiuk is a Ukrainian writer drawn to stories of
            emotional depth, quiet tension, and the inner lives of her
            characters. She explores the weight of choice, the aftermath of
            loss, and the kind of love that does not promise easy answers.
          </p>
          <p className="leading-loose">
            Her books move between historical fantasy, contemporary drama, and
            mythology, but always remain grounded in human experience —
            intimate, restrained, and meant to be felt as much as read.
          </p>
        </div>
      </div>
      <Divider size="large" />
      <PageSubtitle subtitle="Outside these pages" />
      <div className="flex justify-center gap-6">
        {SocialMediaLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200">
              <Image
                src={link.iconSrc}
                alt={`${link.name} Icon`}
                width={20}
                height={20}
                className="object-cover rounded-2xl cursor-pointer"
              />
              <p className="hidden md:block">{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
