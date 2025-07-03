import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}
export default function Container({ children, ...rest }: ContainerProps) {
  return (
    <div
      className={twMerge(
        `${rest.className} w-full min-h-[80dvh] max-w-[1200px] !mx-auto`
      )}
    >
      {children}
    </div>
  );
}
