"use client";

import * as Tabs from "@radix-ui/react-tabs";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { TabItem } from "./TabItem";
import { useState } from "react";

export const SettingsTabs = () => {
  const [currTab, setCurrTab] = useState("tab1");

  return (
    <Tabs.Root value={currTab} onValueChange={setCurrTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="My details"
              isSelected={currTab === "tab1"}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={currTab === "tab2"}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={currTab === "tab3"}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={currTab === "tab4"}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={currTab === "tab5"}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={currTab === "tab6"}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={currTab === "tab7"}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={currTab === "tab8"}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={currTab === "tab9"}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={currTab === "tab10"}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
};
