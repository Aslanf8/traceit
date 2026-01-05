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
              Custom CFIA Compliance Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every food business is unique. Let's build a traceability solution
              tailored specifically to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why Custom Solutions Make Sense
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With how powerful AI has become for software development, I can
                build you a custom traceability solution that's perfectly
                tailored to your business—10x faster than traditional
                development methods and at a fraction of the cost. My
                professional experience working with AI and LLMs, combined with
                having built TraceIT for my parents' freeze-dried food business,
                gives me unique insight into both the technical and practical
                sides of food traceability.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This isn't a large company with investors or sales teams—it's
                just me, Aslan Farboud, doing this on the side because I have a
                passion for building software that solves real problems. If
                TraceIT seems like a good fit for your business, I'd be happy to
                help. Having gone through this process myself, I understand
                exactly what you need and can help you get it built more
                affordably than traditional software development.
              </p>
              <div className="bg-[#00bf63]/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#00bf63]">
                  What You Get
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      A solution built specifically for your business needs and
                      workflows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Faster development timeline thanks to AI-powered tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      More affordable than traditional software development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Direct access to someone who's built this before
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00bf63] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Ongoing support and updates tailored to your needs
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00bf63] hover:bg-[#00a857] border-0 mr-4 mb-4"
                >
                  <Link href="/contact">Get Started - Contact Me</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-[#00bf63] border-[#00bf63] hover:bg-[#00bf63]/10"
                >
                  <Link href="/demo">Request a Demo</Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#00bf63]/5 p-8 rounded-lg border border-[#00bf63]/20">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Ready to Build Your Custom Solution?
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Let's discuss your specific traceability needs and how I can
                help you get a custom solution built faster and more affordably
                than traditional software development. This is just me, Aslan
                Farboud, doing this on the side—if TraceIT seems like a good
                fit for your business, I'd be happy to help.
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
                  How does the custom development process work?
                </h3>
                <p className="text-gray-600">
                  We'll start with a conversation about your specific needs and
                  workflows. Using AI-powered development tools, I can build
                  your solution much faster than traditional methods, which means
                  lower costs for you. You'll get regular updates and can provide
                  feedback throughout the process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  Why is custom development more affordable now?
                </h3>
                <p className="text-gray-600">
                  AI has revolutionized software development, allowing me to
                  build solutions 10x faster than before. This speed means I can
                  offer custom solutions at a fraction of traditional development
                  costs. Plus, having built TraceIT myself, I understand the
                  process and can help you avoid common pitfalls.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  What's included in a custom solution?
                </h3>
                <p className="text-gray-600">
                  Your custom solution will include all the features you need for
                  CFIA compliance, tailored to your specific business processes.
                  We'll work together to ensure it fits your workflow perfectly,
                  and I'll provide ongoing support and updates as your needs
                  evolve.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  How long does it take to build a custom solution?
                </h3>
                <p className="text-gray-600">
                  With AI-powered development, timelines are significantly
                  shorter than traditional software development. The exact
                  timeline depends on your specific requirements, but we can
                  discuss this during our initial consultation. I'll keep you
                  updated throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
