"use client";
import Image from "next/image";
import { FunctionComponent, HTMLAttributes } from "react";

type Props = {
  color?: "primary" | "secondary";
} & HTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<Props> = ({
  color = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      style={{
        position: "relative",
        paddingInline: "24px",
        paddingBlock: "8px",
        fontSize: "2.25rem",
        lineHeight: "1.5rem",
        color: "white",
        minWidth: "180px",
        minHeight: "50px",
      }}
      {...props}
    >
      <Image
        quality={100}
        style={{
          objectFit: "fill",
          zIndex: "-1",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={
          color === "primary"
            ? "/assets/Orange Button.png"
            : "/assets/Blue Button.png"
        }
        fill
        alt=""
      />
      {children}
    </button>
  );
};

export default Button;
