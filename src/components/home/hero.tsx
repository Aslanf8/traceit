import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              CFIA Compliance <span className="text-blue-600">Made Simple</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              TraceIT helps Canadian food businesses meet CFIA traceability
              requirements without breaking the bank. Developed over 3 years
              specifically for SMEs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/features">See Features</Link>
              </Button>
            </div>

            <div className="mt-8 px-4 py-3 bg-blue-50 border border-blue-100 rounded-md text-blue-800 text-sm">
              <p className="font-medium">
                ✓ Purpose-built for CFIA's Safe Food for Canadians Regulations
              </p>
              <p className="font-medium">
                ✓ Track one-step-back, one-step-forward requirements with ease
              </p>
              <p className="font-medium">
                ✓ Used by food businesses across Canada
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                {/* Replace with actual application screenshot or image */}
                <div className="absolute inset-0 bg-white/10 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4"
                    >
                      <path d="M12 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <path d="M10 12h8"></path>
                      <path d="M10 16h8"></path>
                      <path d="M10 8h8"></path>
                    </svg>
                    <h3 className="text-xl font-bold mb-2">
                      TraceIT Dashboard
                    </h3>
                    <p>Screenshot of application will appear here</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg">
              CFIA Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
