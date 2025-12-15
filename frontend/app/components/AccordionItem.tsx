"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden bg-indigo-500/5">
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="
          w-full flex justify-between items-center
          px-6 sm:px-8 py-6
          text-xl sm:text-2xl md:text-3xl
          font-bold text-white
          transition
          hover:bg-white/10
          cursor-pointer
        "
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DIVIDER LINE */}
      <div className="mx-6 sm:mx-8 h-px bg-white/15" />

      {/* CONTENT */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div
          className={`
            px-6 sm:px-8 pt-4 pb-6
            text-base sm:text-lg
            text-white/90
            space-y-4
            transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
