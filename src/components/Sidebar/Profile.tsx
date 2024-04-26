import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../Button";

export const Profile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/leomelegari.png"
        alt="Profile Picture"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Leonardo Melegari
        </span>
        <span className=" truncate text-sm text-zinc-500 dark:text-zinc-400">
          leo@melegari.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 " />
      </Button>
    </div>
  );
};
