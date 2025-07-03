import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface FormProps extends ComponentProps<"form"> {
  children: React.ReactNode;
}

export default function Form({ children, ...rest }: FormProps) {
  return (
    <form
      {...rest}
      className={twMerge(
        `${rest.className} w-full lg:max-w-[50%] md:max-w-[50%] space-y-8 shadow-2xl p-6 rounded-md`
      )}
    >
      {children}
    </form>
  );
}
