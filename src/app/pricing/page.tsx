import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Affordable CFIA Compliance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple pricing plans that make traceability accessible for food
              businesses of any size.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for small operations
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button
                  asChild
                  className="w-full mb-6 bg-[#00bf63] hover:bg-[#00a857] border-0"
                >
                  <Link href="/demo">Get Started</Link>
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Up to 3 users</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>All essential traceability features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Basic reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Up to 500 transactions per month</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="border-2 border-[#00bf63] rounded-lg overflow-hidden shadow-lg bg-white relative">
              <div className="bg-[#00bf63] text-white text-center py-2 font-medium">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard</h3>
                <p className="text-gray-600 mb-6">For growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button
                  asChild
                  className="w-full mb-6 bg-[#00bf63] hover:bg-[#00a857] border-0"
                >
                  <Link href="/demo">Get Started</Link>
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Up to 10 users</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>All Starter features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Advanced reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Priority email & phone support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Up to 2,000 transactions per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Mock recall simulations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For larger operations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$349</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button
                  asChild
                  className="w-full mb-6 bg-[#00bf63] hover:bg-[#00a857] border-0"
                >
                  <Link href="/demo">Get Started</Link>
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>All Standard features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>Unlimited transactions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-2 flex-shrink-0" />
                    <span>API access for integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-[#00bf63]/5 p-8 rounded-lg border border-[#00bf63]/20">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Every food business has unique needs. Contact me to discuss how I
              can adapt TraceIT to fit your specific requirements.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="text-[#00bf63] border-[#00bf63] hover:bg-[#00bf63]/10"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  Is there a contract or commitment?
                </h3>
                <p className="text-gray-600">
                  No long-term contracts. All pricing is month-to-month, and you
                  can upgrade, downgrade, or cancel anytime.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  Can I switch plans as my business grows?
                </h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade or downgrade your plan at any time
                  to match your business needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  What is included in the implementation?
                </h3>
                <p className="text-gray-600">
                  All plans include basic setup assistance. With Standard and
                  Enterprise plans, I'll personally help with onboarding and
                  training for your team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  Do you offer a free trial?
                </h3>
                <p className="text-gray-600">
                  I offer a free demonstration of the system. After seeing how
                  it works, you can start with a one-month commitment to fully
                  test it with your operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
