import { Books } from "@/lib/constants";
import BooksList from "../components/BooksList";

export default function BooksPage(): React.JSX.Element {
  return <BooksList Books={Books} title="Books" />;
}
