import Divider from "./Divider";

export default function PageTitle({
  title,
}: Readonly<{
  title: string;
}>): React.JSX.Element {
  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl tracking-wide">
        {title}
      </h1>
      <Divider />
    </>
  );
}
