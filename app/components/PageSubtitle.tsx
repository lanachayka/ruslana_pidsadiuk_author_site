import Divider from "./Divider";

export default function PageSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <>
      <h2 className="text-center text-2xl tracking-wide">{subtitle}</h2>
      <Divider />
    </>
  );
}
