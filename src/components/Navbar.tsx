"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const currentTranslateYRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const isScrolledRef = useRef(false);
  const isOpenRef = useRef(false);

  // Keep isOpenRef in sync with isOpen state
  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen && headerRef.current) {
      currentTranslateYRef.current = 0;
      headerRef.current.style.transform = "translate3d(0, 0px, 0)";
    }
  }, [isOpen]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const delta = currentScrollY - lastScrollY;

      // Update background and border styling threshold
      const shouldBeScrolled = currentScrollY > 20;
      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }

      // If mobile menu is open, keep navbar pinned at the top
      if (isOpenRef.current) {
        lastScrollYRef.current = currentScrollY;
        ticking = false;
        return;
      }

      const header = headerRef.current;
      if (header) {
        const headerHeight = header.offsetHeight || 80;

        if (currentScrollY <= 0) {
          // Always fully visible at the top of the page
          currentTranslateYRef.current = 0;
          header.style.transform = "translate3d(0, 0px, 0)";
        } else {
          // Slowly move up on scroll down, slowly move down on scroll up
          // Bounded strictly between -headerHeight (hidden) and 0 (fully visible)
          let newTranslateY = currentTranslateYRef.current - delta;
          if (newTranslateY < -headerHeight) newTranslateY = -headerHeight;
          if (newTranslateY > 0) newTranslateY = 0;

          currentTranslateYRef.current = newTranslateY;
          header.style.transform = `translate3d(0, ${newTranslateY}px, 0)`;
        }
      }

      lastScrollYRef.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "APPROACH", href: "#approach" },
    { name: "METHODS", href: "#methods" },
    { name: "OUR OFFICE", href: "#our-office" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      style={{ transform: "translate3d(0, 0px, 0)" }}
      className={`fixed top-0 left-0 right-0 z-50 transform-gpu will-change-transform border-b py-3.5 sm:py-4 transition-[background-color,border-color,box-shadow] duration-200 ${
        isScrolled
          ? "bg-[#FAF8F5]/98 shadow-xs border-[#658A77]/40"
          : "bg-[#FAF8F5] border-[#658A77]/25"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col cursor-default">
          <span className="font-serif text-2xl sm:text-[1.7rem] font-medium tracking-tight text-[#284338]">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[0.75rem] sm:text-[0.8rem] font-medium tracking-widest uppercase text-[#658A77] -mt-0.5">
            Licensed Clinical Psychologist
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.82rem] font-medium uppercase tracking-wider text-[#4A5550] hover:text-[#284338] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Anchor CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#284338] text-[0.82rem] font-medium uppercase tracking-wider text-[#284338] hover:bg-[#284338] hover:text-[#FAF8F5] transition-colors duration-200"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#284338] hover:text-[#1E342B] focus:outline-hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#658A77]/25 px-6 pt-4 pb-8 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium uppercase tracking-wider text-[#4A5550] hover:text-[#284338] py-2 border-b border-[#658A77]/15"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3 rounded-full bg-[#284338] text-[#FAF8F5] text-xs font-medium uppercase tracking-wider hover:bg-[#1E342B] transition-colors"
              >
                REQUEST AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
