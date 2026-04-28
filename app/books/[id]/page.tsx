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

  return (
    <div className="flex-col items-center space-y-4">
      {book ? (
        <>
          <PageTitle title={book.title} />
          <div className="flex-col items-star md:flex-row justify-center gap-6 flex">
            <div className="flex flex-col items-center space-y-4">
              <Image
                width={200}
                height={200}
                src={book.imageUrl}
                alt={book.title}
              />
              <LinkButton href={book.amazonUrl} className="w-50">
                Read on Amazon
              </LinkButton>
            </div>
            <div className="flex flex-col space-y-4">
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
          <div className="flex justify-center">
            <Image
              src={book.feelsImgUrl}
              width={300}
              height={300}
              className="rounded-md"
              alt={`${book.title} moodboard`}
            />
          </div>
          <Divider size="large" />
          <PageSubtitle subtitle="The Beginning" />
          <p className="text-center leading-loose whitespace-pre-wrap">{book.firstPage}</p>
          <Divider size="large" />
          <PageSubtitle subtitle="Characters" />
          <Carousel>
            {book.characters.map((character) => (
              <div
                key={character.name}
                className="shrink-0 w-full flex justify-center items-center px-8"
              >
                <Image
                  className="rounded-md"
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
