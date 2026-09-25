import { Books, Series } from "@/lib/constants";
import Image from "next/image";
import BooksList from "../../components/BooksList";

type SeriesPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SeriesPage({
  params,
}: SeriesPageProps): Promise<React.JSX.Element> {
  const { id } = await params;
  const series = Series.find((item) => item.id === id);
  const seriesBooks = Books.filter((book) => series?.books.includes(book.id));

  return (
    <div className="relative isolate overflow-hidden rounded-xl">
      {series?.bg && (
        <Image
          src={series.bg}
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="object-cover object-center opacity-50"
        />
      )}
      <div className="relative bg-[#E8EFE0]/35 px-4 py-8">
        <BooksList Books={seriesBooks} title={series?.title ?? "Series"} />
      </div>
    </div>
  );
}
