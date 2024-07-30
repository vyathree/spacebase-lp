"use client";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  href: string;
  color?: "white" | "blue";
  selected?: boolean;
  handleChangeHash?: (hash: string) => void;
}

const colorMap = {
  white: "#fff",
  blue: "#449def",
};

const NavigationLink: FunctionComponent<PropsWithChildren<Props>> = ({
  selected,
  href,
  children,
  color = "white",
  handleChangeHash,
}) => {
  return (
    <Link
      onClick={() => handleChangeHash?.(href)}
      className="w-fit text-xl text-blue-400"
      shallow={false}
      style={{
        color: selected ? "rgb(194 65 12)" : colorMap[color],
      }}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
