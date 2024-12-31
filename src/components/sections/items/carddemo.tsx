import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CodePreviewCard = () => {
  return (
    <div className="group relative flex flex-col gap-6 overflow-hidden rounded-xl border border-border/5 border-t-border/10 bg-gradient-to-b from-card/0 to-card p-6 text-card-foreground shadow-md transition-all hover:from-card/5 hover:to-card">
      {/* Top-right arrow link */}
      <a className="absolute right-4 top-4 block rounded-full bg-accent/5 p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </a>

      {/* Header content */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          The code is yours
        </h3>
        <div className="text-md flex flex-col gap-2 text-balance text-muted-foreground">
          <p className="max-w-[460px]">
            With Launch UI, the code is yours forever. Never bother about subscriptions and lock-ins.
          </p>
        </div>
      </div>

      {/* Code preview section */}
      <div className="flex justify-center min-h-[240px] grow items-center p-4 lg:p-12">
        <div className="h-full w-full">
          <div className="relative h-full w-full">
            {/* Tab interface */}
            <div className="absolute left-[50%] top-0 z-10 w-full -translate-x-[50%] translate-y-0">
              <div className="relative flex min-h-[540px] min-w-[460px] flex-col gap-4 rounded-[12px] border border-border/5 border-t-border/15 bg-muted/50">
                {/* Tab header */}
                <div className="flex w-full items-center justify-start gap-4 overflow-hidden py-2">
                  {/* Dot indicators */}
                  <div className="hidden gap-2 pl-4 lg:flex">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                  </div>

                  {/* File tabs */}
                  <div className="relative flex w-[320px]">
                    {/* Page.tsx tab */}
                    <div className="flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                        <path d="M12 14.1164C13.1572 14.1164 14.0952 13.1689 14.0952 12C14.0952 10.8311 13.1572 9.8836 12 9.8836C10.8428 9.8836 9.90476 10.8311 9.90476 12C9.90476 13.1689 10.8428 14.1164 12 14.1164Z" fill="currentColor"/>
                        <path d="M12 16.7619C17.7858 16.7619 22.4762 14.6299 22.4762 12C22.4762 9.37007 17.7858 7.2381 12 7.2381C6.21416 7.2381 1.52381 9.37007 1.52381 12C1.52381 14.6299 6.21416 16.7619 12 16.7619Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7.91731 14.381C10.8102 19.4423 14.9833 22.4793 17.2381 21.1643C19.4929 19.8493 18.9756 14.6803 16.0827 9.61905C13.1898 4.55775 9.01671 1.52075 6.7619 2.83571C4.5071 4.15067 5.02439 9.31965 7.91731 14.381Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7.91731 9.61905C5.02439 14.6803 4.5071 19.8493 6.7619 21.1643C9.01671 22.4793 13.1898 19.4423 16.0827 14.381C18.9756 9.31965 19.4929 4.15067 17.2381 2.83571C14.9833 1.52075 10.8102 4.55775 7.91731 9.61905Z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <p>page.tsx</p>
                    </div>

                    {/* Tailwind config tab */}
                    <div className="flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                        <path d="M11.9997 5C9.93208 5 8.41053 5.82843 7.43594 7.48502C7.15487 7.96278 7.94335 8.41626 8.45604 8.20554C9.04899 7.96182 9.68017 7.93517 10.3497 8.12585C11.1873 8.36282 11.7845 9.0526 12.4469 9.81601C13.5249 11.0599 14.7735 12.5 17.5002 12.5C19.5669 12.5 21.0877 11.6726 22.0622 10.0181C22.3436 9.54035 21.554 9.08597 21.0409 9.29611C20.4488 9.53864 19.8185 9.56489 19.1501 9.37488C18.3138 9.13791 17.7154 8.4474 17.0529 7.68326C15.9749 6.44006 14.7263 5 11.9997 5ZM6.49984 12.5C4.43307 12.5 2.91232 13.3274 1.9378 14.9819C1.65642 15.4597 2.44604 15.914 2.95911 15.7039C3.55123 15.4614 4.18151 15.4351 4.84989 15.6251C5.68617 15.8621 6.28463 16.5526 6.94706 17.3167C8.02506 18.5599 9.27367 20 11.9997 20C14.0676 20 15.5889 19.172 16.5634 17.5163C16.8446 17.0386 16.0556 16.5847 15.5427 16.7952C14.95 17.0386 14.3192 17.0651 13.6503 16.8749C12.8133 16.6372 12.2155 15.9474 11.5531 15.1833C10.4745 13.9401 9.22714 12.5 6.49984 12.5Z" fill="currentColor"/>
                      </svg>
                      <p>tailwind.config.ts</p>
                    </div>

                    {/* Active tab indicator */}
                    <div className="absolute left-0 top-0 h-full w-[50%] px-2 transition-all duration-1000 ease-in-out group-hover:left-[50%]">
                      <div className="h-full w-full rounded-md border-t bg-gradient-to-b from-accent/10 to-accent/5 shadow-md"></div>
                    </div>
                  </div>
                </div>

                {/* Code content */}
                <div className="relative w-full grow overflow-hidden">
                  {/* First file content */}
                  <div className="absolute left-0 top-0 translate-x-0 px-8 transition-all duration-1000 ease-in-out group-hover:translate-x-[-100%] group-hover:opacity-0">
                    <pre className="font-mono text-xs text-muted-foreground">
                      {`import { cn } from "@/lib/utils";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type NoteProps = PropsWithChildren & {
  title?: string;
  type?: "note" | "danger" | "warning" | "success";
  className?: string;
};

export default function Note({
  children,
  title = "Note",
  type = "note",
  className,
}: NoteProps) {
  const noteClassNames = clsx({
    "dark:bg-stone-950/25 bg-stone-50": type === "note",
    "dark:bg-red-950 bg-red-100 border-red-200 dark:border-red-900":
      type === "danger",
    "dark:bg-orange-950 bg-orange-100 border-orange-200 dark:border-orange-900":
      type === "warning",
    "dark:bg-green-950 bg-green-100 border-green-200 dark:border-green-900":
      type === "success",
  });`}
                    </pre>
                  </div>

                  {/* Second file content */}
                  <div className="absolute left-0 top-0 translate-x-[100%] px-8 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <pre className="font-mono text-xs text-muted-foreground">
                      {`import { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card) / 0.2)",
          foreground: "hsl(var(--card-foreground))",
        },`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom gradient effect */}
            <div className="absolute w-full bottom-0 translate-y-12 scale-110 transition-all duration-1000 group-hover:scale-[130%]">
              <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] sm:h-[512px]"></div>
              <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] sm:h-[256px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreviewCard;