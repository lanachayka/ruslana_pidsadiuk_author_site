import Link from "next/link";

export default function LinkButton({
  children,
  href,
  className,
  isTarget = true,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
  isTarget?: boolean;
}>): React.JSX.Element {
  return (
    <Link
      href={href}
      className={`
      inline-flex items-center justify-center
      px-5 py-2 rounded-md
      bg-[#7C8F80] text-[#dde5d3]
      border border-[#5A6D62]/40
      hover:bg-[#8FA087]
      hover:text-[#dde5d3]
      transition-all duration-300
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]
      active:scale-[0.97]
      ${className || ""}
      `}
      target={isTarget ? "_blank" : undefined}
      rel={isTarget ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
