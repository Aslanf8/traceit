import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Regulations() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Understanding CFIA Traceability Requirements
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              The Safe Food for Canadians Regulations (SFCR) requires food
              businesses to:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  <strong>Track one step back</strong> - Document the food
                  commodity, ingredients, and food animals that you receive
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  <strong>Track one step forward</strong> - Document who you
                  supplied your food products to
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  <strong>Food identification</strong> - Properly label food
                  with lot codes or unique identifiers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  <strong>Record keeping</strong> - Maintain accurate,
                  accessible records for at least 2 years
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6">
              These requirements apply to businesses that import, export, or
              trade food across provincial boundaries, as well as many food
              manufacturers and processors.
            </p>

            <Button asChild>
              <Link href="/compliance-guide">Full CFIA Compliance Guide</Link>
            </Button>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-red-50 p-3 rounded-full mr-4">
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
                  className="text-red-600"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Non-compliance Risks</h3>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Fines and penalties from CFIA</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Product detention or removal from market</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Import/export restrictions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Reputation damage with customers and industry</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Increased inspection frequency and scrutiny</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-blue-800 font-medium">
                TraceIT's software has been specifically designed to address
                each CFIA traceability requirement, helping you avoid these
                risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
