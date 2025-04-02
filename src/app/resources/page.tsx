import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Traceability Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government resources and tools to help your food business
              understand and comply with CFIA traceability requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#00bf63] mb-4">
                Official CFIA Traceability Resources
              </h2>
              <p className="text-gray-700 mb-6">
                The Canadian Food Inspection Agency provides official guidance
                and tools to help businesses understand and comply with
                traceability requirements under the Safe Food for Canadians
                Regulations (SFCR).
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3">
                    Traceability Fact Sheet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Official CFIA fact sheet explaining traceability
                    requirements under the Safe Food for Canadians Regulations,
                    including who needs to comply and what records must be kept.
                  </p>
                  <a
                    href="https://inspection.canada.ca/sites/default/files/legacy/DAM/DAM-food-aliments/STAGING/text-texte/regs_safe_food_fact_sheet_traceability_1529429209686_eng.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00bf63] hover:text-[#00a857] font-medium"
                  >
                    Download PDF
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3">
                    Traceability Interactive Tool
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An official tool from the CFIA to help you determine if your
                    food business needs to meet traceability requirements under
                    the Safe Food for Canadians Regulations.
                  </p>
                  <a
                    href="https://na1se.voxco.com/SE/93/traceability/?&lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00bf63] hover:text-[#00a857] font-medium"
                  >
                    Use the Tool
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3">
                    Traceability Video Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Watch this CFIA video explaining how a business would create
                    traceability records, with step-by-step guidance on tracking
                    food one step forward and one step back.
                  </p>
                  <a
                    href="https://inspection.canada.ca/en/food-safety-industry/toolkit-food-businesses/traceability-requirements"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00bf63] hover:text-[#00a857] font-medium"
                  >
                    Watch Video
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3">
                    Detailed Regulatory Requirements
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive overview of traceability requirements in the
                    SFCR, including documentation requirements, labelling
                    specifications, and commodity-specific guidance.
                  </p>
                  <a
                    href="https://inspection.canada.ca/en/food-safety-industry/traceability/traceability"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00bf63] hover:text-[#00a857] font-medium"
                  >
                    View Guidelines
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3">
                    SFCR Handbook for Food Businesses
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive handbook to help you understand the Safe
                    Food for Canadians Regulations, including traceability
                    requirements and how they impact your business.
                  </p>
                  <a
                    href="https://inspection.canada.ca/en/food-safety-industry/toolkit-food-businesses/sfcr-handbook-food-businesses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00bf63] hover:text-[#00a857] font-medium"
                  >
                    View Handbook
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3">
                    CFIA Toolkit for Food Businesses
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A helpful collection of resources for food businesses new to
                    the Safe Food for Canadians Regulations, including guidance
                    on traceability, licensing, and preventive controls.
                  </p>
                  <a
                    href="https://inspection.canada.ca/en/food-safety-industry/toolkit-food-businesses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00bf63] hover:text-[#00a857] font-medium"
                  >
                    Access Toolkit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#00bf63]/5 p-8 rounded-xl border border-[#00bf63]/20">
              <h2 className="text-2xl font-semibold text-[#00bf63] mb-4">
                How TraceIT Simplifies Compliance
              </h2>
              <p className="text-gray-700 mb-6">
                I created TraceIT after watching my mom struggle with CFIA
                requirements in her freeze-dried food business. After three
                years of real-world testing and refinement, TraceIT now makes it
                easy to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#00bf63] mr-2 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Track all ingredients and products one step back and one
                    step forward
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#00bf63] mr-2 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Generate complete lot code and product identification
                    records
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#00bf63] mr-2 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Maintain all required records automatically for the required
                    2+ year period
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#00bf63] mr-2 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Implement an effective product recall plan that can be
                    activated with a few clicks
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-[#00bf63] hover:bg-[#00a857] border-0"
                >
                  <Link href="/demo">See How TraceIT Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
