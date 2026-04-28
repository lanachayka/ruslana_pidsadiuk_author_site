import { Books } from "@/lib/constants";
import BookCard from "./BookCard";
import PageTitle from "./PageTitle";

export default function BooksList(): React.JSX.Element {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <PageTitle title="Books" />
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {Books.map((book) => (
          <BookCard
            key={book.id}
            {...book}
          />
        ))}
      </div>
    </div>
  );
}
