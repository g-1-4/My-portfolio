"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className="
          fixed top-0 w-full z-50
          bg-indigo-500/80
          backdrop-blur-xl
          border-b border-white/10
          shadow-md
          py-3
          transition-colors duration-300
          text-white
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 md:px-6">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-wide hover:text-white/80 transition"
          >
            <span className="hidden md:inline">Gowtham Sriram Arepalli</span>
            <span className="md:hidden">Gowtham Arepalli</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center space-x-8 text-lg font-normal">
            <Link href="#contact" className="hover:text-white/70 transition">
              Contact
            </Link>

            <Link href="#projects" className="hover:text-white/70 transition">
              Projects
            </Link>

            <Link href="#resume" className="hover:text-white/70 transition">
              Resume
            </Link>

            <Link
              href="mailto:gowthamarepalli09@gmail.com"
              className="transition transform hover:scale-125 hover:text-white/70"
            >
              <Mail size={26} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/gowthamarepalli"
              target="_blank"
              className="transition transform hover:scale-125 hover:text-white/70"
            >
              <Linkedin size={26} />
            </Link>

            <Link
              href="https://github.com/g-1-4"
              target="_blank"
              className="transition transform hover:scale-125 hover:text-white/70"
            >
              <Github size={26} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-3xl hover:text-white/80 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* SLIDE PANEL */}
          <div
            className={`
              absolute right-0 top-0 h-full w-64
              bg-[#6E70FD]
              text-white
              p-6
              shadow-xl
              transform-gpu will-change-transform
              flex flex-col items-center text-center space-y-8 text-lg
              ${isClosing ? "animate-slideOut" : "animate-slideIn"}
            `}
          >
            {/* CLOSE BUTTON */}
            <button
              className="text-3xl self-end hover:text-white/70 transition mb-4"
              onClick={() => {
                setIsClosing(true);
                setTimeout(() => {
                  setMenuOpen(false);
                  setIsClosing(false);
                }, 300);
              }}
              aria-label="Close menu"
            >
              <HiX />
            </button>

            {/* LINKS */}
            {["contact", "projects", "resume"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="hover:text-white/70 transition"
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setMenuOpen(false);
                    setIsClosing(false);
                  }, 300);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            {/* SOCIALS */}
            <div className="border-t border-white/30 pt-4 flex space-x-6 text-3xl">
              <Link
                href="mailto:gowthamarepalli09@gmail.com"
                className="hover:scale-110 transition"
              >
                <Mail size={28} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/gowthamarepalli"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <Linkedin size={28} />
              </Link>

              <Link
                href="https://github.com/g-1-4"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <Github size={28} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
