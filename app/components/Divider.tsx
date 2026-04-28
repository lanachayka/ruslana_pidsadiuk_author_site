import React from "react";

type DividerProps = {
  size?: "small" | "large";
}

export default function Divider({ size = "small" }: DividerProps): React.JSX.Element {
  return <div className={`h-px bg-[#8FA087]/50 mx-auto my-8 ${size === "small" ? "w-[30%]" : "w-[70%]"}`}></div>;
}
