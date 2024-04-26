import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps {}

interface InputPrefixProps extends ComponentProps<"div"> {}
export const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />;
};

interface InputControlProps extends ComponentProps<"input"> {}
export const InputControl = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder-zinc-600 focus:border-0 dark:placeholder-zinc-400 dark:text-zinc-100"
      {...props}
    />
  );
};

interface InputRootProps extends ComponentProps<"div"> {}
export const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
        props.className,
      )}
      {...props}
    />
  );
};

export const Input = ({}: InputProps) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"></div>
  );
};
