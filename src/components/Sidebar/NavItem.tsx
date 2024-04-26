import { ChevronDown } from "lucide-react";
import { ComponentProps, ElementType } from "react";

export interface NavItemProps extends ComponentProps<"a"> {
  title: string;
  icon: ElementType;
  showChevronDown?: boolean;
}

export const NavItem = ({
  title,
  icon: Icon,
  showChevronDown = true,
  ...props
}: NavItemProps) => {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
      {...props}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      {showChevronDown && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
      )}
    </a>
  );
};
