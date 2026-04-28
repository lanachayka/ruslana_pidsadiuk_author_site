import { readerCards, storyImages, worlds } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "./components/LinkButton";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#E8EFE0]/60 backdrop-blur-sm text-[#252A27]">
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#1F2622]/55" />
        <div className="relative z-10 max-w-3xl">
          <p className="font-serif text-4xl italic leading-tight text-[#E8EFE0] md:text-6xl">
            Who am I? An author.
            <br />
            What do I create? Worlds you can feel.
          </p>
          <LinkButton className="mt-20 h-15 w-60 text-xl" href="/books">
            EXPLORE MY BOOKS
          </LinkButton>
        </div>
      </section>
      <section className="px-6 py-24">
        <h2 className="mb-10 text-center font-serif text-4xl italic">
          How My Stories Feel
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {storyImages.map((image, index) => (
            <div
              key={index}
              className="h-72 min-w-[240px] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                height={300}
                width={300}
                src={image}
                alt=""
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-4xl italic">
              Where My Stories Live
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              I write psychological drama, but each story lives in a different
              world:
            </p>

            <ul className="space-y-2 text-lg">
              <li>— medieval (no magic)</li>
              <li>— contemporary</li>
              <li>— mythology</li>
              <li>— gothic (1560–1860)</li>
            </ul>

            <Link
              href="/books"
              className="mt-8 inline-block text-sm uppercase tracking-wider underline"
            >
              Explore worlds →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {worlds.map((world) => (
              <div
                key={world.title}
                className="relative h-48 overflow-hidden rounded-xl"
              >
                <Image
                  height={300}
                  width={300}
                  src={world.image}
                  alt={world.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-serif text-lg italic">{world.title}</p>
                  <p className="text-xs">{world.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 font-serif text-4xl italic">
            My Stories are about:
          </h2>

          <div className="space-y-3 text-lg">
            <p>— choice and consequences</p>
            <p>— quiet, complicated love</p>
            <p>— people who keep going</p>
            <p>— what we don’t say, but feel</p>
          </div>

          <p className="mt-10 font-serif text-2xl">
            Not about perfect endings.
            <br />
            But about staying human.
          </p>
        </div>
      </section>
      <section className="px-6 py-24">
        <h2 className="mb-10 text-center font-serif text-4xl italic">
          You might find yourself here if you:
        </h2>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {readerCards.map((card) => (
            <div
              key={card}
              className="rounded-xl bg-[#F4EEC7]/50 p-6 shadow-sm"
            >
              <p className="font-serif text-lg">{card}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="font-serif text-3xl italic leading-snug">
            If something here feels like a match,
            <br />I gently invite you into my worlds.
          </p>
          <LinkButton className="mt-10" href="/books">
            ENTER MY WORLDS
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
