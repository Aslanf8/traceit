import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/main-logo-prod.png"
                alt="TraceIT Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Simplifying CFIA compliance for Canadian food businesses, built
              from real experience with my mom's freeze-dried food business.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/benefits"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  All Resources
                </Link>
              </li>
              <li>
                <a
                  href="https://inspection.canada.ca/sites/default/files/legacy/DAM/DAM-food-aliments/STAGING/text-texte/regs_safe_food_fact_sheet_traceability_1529429209686_eng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  CFIA Fact Sheet
                </a>
              </li>
              <li>
                <a
                  href="https://inspection.canada.ca/en/food-safety-industry/toolkit-food-businesses/traceability-requirements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Traceability Video
                </a>
              </li>
              <li>
                <a
                  href="https://na1se.voxco.com/SE/93/traceability/?&lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Interactive Tool
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  My Story
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@traceit.ca"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  hello@traceit.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} TraceIT. Created with ❤️ from solving real problems
            in my mom's food business.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-[#00bf63] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-[#00bf63] text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
