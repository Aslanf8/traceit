"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // make background yellow for the image
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* maximize the size of tthe div */}

        <Link href="/" className="flex items-center">
          <Image
            src="/main-logo-prod.svg"
            alt="TraceIT Logo"
            width={200}
            height={50}
            suppressHydrationWarning
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/features"
            className="text-gray-600 hover:text-[#00bf63] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/benefits"
            className="text-gray-600 hover:text-[#00bf63] transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-[#00bf63] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-[#00bf63] transition-colors"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-gray-600 hover:text-[#00bf63] transition-colors"
          >
            Resources
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="mr-2 bg-[#00bf63] hover:bg-[#00a857] border-0"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="text-[#00bf63] border-[#00bf63] hover:bg-[#00bf63]/10"
          >
            <Link href="/demo">Request Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-gray-50">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/features"
              className="text-gray-600 hover:text-[#00bf63] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/benefits"
              className="text-gray-600 hover:text-[#00bf63] transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-[#00bf63] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#00bf63] transition-colors"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-[#00bf63] transition-colors"
            >
              Resources
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                asChild
                className="bg-[#00bf63] hover:bg-[#00a857] border-0"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="text-[#00bf63] border-[#00bf63] hover:bg-[#00bf63]/10"
              >
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
