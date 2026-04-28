"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useCallback, useEffect, useState } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const slidesCount = Children.count(children);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {Children.map(children, (child) => (
            <div
              className="
                min-w-0 shrink-0 grow-0
                basis-[90%]
                sm:basis-[76%]
                md:basis-[58%]
                lg:basis-[42%]
                px-3
              "
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {slidesCount > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  selectedIndex === index
                    ? "w-6 bg-[#8FA087]"
                    : "w-1.5 bg-[#8FA087]/35 hover:bg-[#8FA087]/60"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
