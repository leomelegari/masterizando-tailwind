"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import * as Collapsable from "@radix-ui/react-collapsible";
import { Button } from "../Button";

export const Sidebar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themeSwitcher = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
  };

  return (
    <Collapsable.Root className="border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 p-4 flex flex-col gap-6 fixed left-0 top-0 right-0 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsable.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="w-6 h-6" />
          </Button>
        </Collapsable.Trigger>
      </div>

      <Collapsable.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="w-5 h-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
            <NavItem
              title="Theme"
              icon={theme === "light" ? MoonIcon : SunIcon}
              showChevronDown={false}
              onClick={(e) => themeSwitcher(e)}
            />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsable.Content>
    </Collapsable.Root>
  );
};
