import Carousel from "@/app/components/Carousel";
import Divider from "@/app/components/Divider";
import ForcesCard from "@/app/components/ForcesCard";
import KingdomCard from "@/app/components/KingdomCard";
import LinkButton from "@/app/components/LinkButton";
import PageSubtitle from "@/app/components/PageSubtitle";
import PageTitle from "@/app/components/PageTitle";
import { Books } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.JSX.Element> {
  const { id } = await params;
  const book = Books.find((b) => b.id === id);
  const purchaseLinks = [
    { href: book?.amazonUrl, label: "Amazon" },
    book?.koboUrl ? { href: book.koboUrl, label: "Kobo" } : null,
    book?.appleBooksUrl
      ? { href: book.appleBooksUrl, label: "Apple Books" }
      : null,
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div className="flex-col items-center space-y-4">
      {book ? (
        <>
          <PageTitle title={book.title} />
          <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:items-start">
            <div className="flex w-full max-w-[220px] shrink-0 flex-col items-center space-y-4">
              <Image
                width={200}
                height={200}
                src={book.imageUrl}
                alt={book.title}
                priority
                className="w-[200px] h-auto shrink-0 rounded-md"
              />
              <div
                className={`flex w-full gap-2 ${
                  purchaseLinks.length === 1 ? "flex-col" : "flex-row"
                }`}
              >
                {purchaseLinks.map((link) => (
                  <LinkButton
                    key={link.label}
                    href={link.href}
                    className={
                      purchaseLinks.length === 1
                        ? "w-full min-w-0 px-2"
                        : "min-w-0 flex-1 px-2"
                    }
                  >
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            </div>
            <div className="flex w-full max-w-2xl flex-col items-center space-y-4 text-center md:items-start md:text-left">
              <p className="text-xl">{book.subtitle}</p>
              <p className="leading-loose whitespace-pre-wrap">{book.blurb}</p>
            </div>
          </div>
          <Divider size="large" />
          <PageSubtitle subtitle="Quotes" />
          <Carousel>
            {book.quotes.map((quote, index) => (
              <div
                key={index}
                className="shrink-0 w-full flex justify-center items-center px-8"
              >
                <p className="text-lg text-center italic max-w-sm">{quote}</p>
              </div>
            ))}
          </Carousel>
          <Divider size="large" />
          <PageSubtitle subtitle="How this story Feels" />
          <Carousel>
            {book.feels.map((feel) => (
              <div
                key={feel.id}
                className="h-75 shrink-0 w-full flex justify-center items-center px-8"
              >
                <Image
                  src={feel.img}
                  width={300}
                  height={300}
                  className="h-75 w-auto rounded-md object-contain"
                  alt={`${book.title} moodboard`}
                  priority
                />
              </div>
            ))}
          </Carousel>
          <Divider size="large" />
          <PageSubtitle subtitle="The Beginning" />
          <p className="text-center leading-loose whitespace-pre-wrap">
            {book.firstPage}
          </p>
          <Divider size="large" />
          <PageSubtitle subtitle="Characters" />
          <Carousel>
            {book.characters.map((character) => (
              <div
                key={character.name}
                className="h-75 shrink-0 w-full flex justify-center items-center px-8"
              >
                <Image
                  className="max-h-full w-auto rounded-md object-contain"
                  src={character.img}
                  alt={character.name}
                  width={250}
                  height={200}
                />
              </div>
            ))}
          </Carousel>
          {book.kingdoms && (
            <>
              <Divider size="large" />
              <PageSubtitle subtitle="Kingdoms" />
              <Carousel>
                {book.kingdoms.map((kingdom) => (
                  <KingdomCard key={kingdom.id} {...kingdom} />
                ))}
              </Carousel>
            </>
          )}
          {book.forces && (
            <>
              <Divider size="large" />
              <PageSubtitle subtitle="Gods Forces" />
              <Carousel>
                {book.forces.map((force) => (
                  <ForcesCard key={force.title} {...force} />
                ))}
              </Carousel>
            </>
          )}
        </>
      ) : (
        <PageTitle title={"Book not found"} />
      )}
    </div>
  );
}
