import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BenefitsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of Using TraceIT
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond CFIA compliance, TraceIT delivers real value to your food
              business, just like it did for my mom's freeze-dried food
              operation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="flex flex-col">
              <div className="bg-[#00bf63]/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00bf63]"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Peace of Mind
              </h2>
              <p className="text-gray-600 mb-4">
                No more worrying about CFIA compliance. TraceIT ensures you're
                always ready for inspections with complete, accurate
                traceability records – the same relief my mom experienced.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Confidence that you're meeting all CFIA requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Reduced stress during CFIA inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Protection from compliance-related penalties</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#00bf63]/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00bf63]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 18V6"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Cost Savings
              </h2>
              <p className="text-gray-600 mb-4">
                I designed TraceIT to be affordable for small and medium
                businesses like my mom's, with significant cost advantages
                compared to other solutions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    No need for expensive consultants or complex systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Reduced staff time spent on manual record keeping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Avoid costs associated with non-compliance penalties
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="flex flex-col">
              <div className="bg-[#00bf63]/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00bf63]"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Operational Efficiency
              </h2>
              <p className="text-gray-600 mb-4">
                Beyond compliance, TraceIT streamlines your operations with
                better tracking and management capabilities – I saw this
                firsthand in my mom's business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Reduce the time spent on record keeping by up to 70%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Better inventory management with accurate tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Streamlined receiving and shipping processes</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#00bf63]/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00bf63]"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Business Protection
              </h2>
              <p className="text-gray-600 mb-4">
                TraceIT helps protect your business reputation and operations in
                case of food safety incidents – crucial for small businesses
                like my mom's.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Quickly identify affected products in a recall situation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Minimize the scope and impact of product recalls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Demonstrate due diligence in food safety practices
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <div className="bg-[#00bf63]/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00bf63]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Food Safety Confidence
              </h2>
              <p className="text-gray-600 mb-4">
                TraceIT enhances your overall food safety system, giving you and
                your customers greater confidence – something I built into the
                system from day one.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Better visibility into your supply chain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Enhanced ability to identify and address issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Support for your overall food safety management system
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#00bf63]/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#00bf63]"
                >
                  <path d="M7 22h10"></path>
                  <path d="M12 17v5"></path>
                  <path d="M7 10.5V15h10V9"></path>
                  <path d="M21 10.5A3.5 3.5 0 0 0 17.5 7H15a3.5 3.5 0 0 1-7 0H6.5a3.5 3.5 0 0 0-3.5 3.5"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Market Access
              </h2>
              <p className="text-gray-600 mb-4">
                Being fully CFIA compliant opens doors to more markets and
                customers – helping my mom's business grow, and yours too.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>Meet requirements for export markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Satisfy traceability demands from large retail customers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bf63] mr-2">•</span>
                  <span>
                    Gain competitive advantage over non-compliant competitors
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Experience These Benefits Firsthand
            </h2>

            <p className="text-xl text-black mb-8">
              See how the same solution that helped my mom's business can
              transform your approach to CFIA compliance and food safety
              management.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#00bf63] hover:bg-[#00bf63]/10"
            >
              <Link href="/demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
