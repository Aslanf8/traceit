import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My TraceIT Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey of creating a simple solution for my mom's
              freeze-dried food business that grew into something that can help
              all Canadian food producers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
              <div className="col-span-2">
                <h2 className="text-3xl font-bold mb-6">How It Started</h2>
                <p className="text-gray-600 mb-4">
                  TraceIT began three years ago when I watched my mom struggle
                  with the overwhelming traceability requirements after the
                  Canadian Food Inspection Agency introduced the Safe Food for
                  Canadians Regulations (SFCR) for her freeze-dried food
                  business.
                </p>
                <p className="text-gray-600 mb-4">
                  As she tried to manage her small business, the administrative
                  burden of compliance was taking precious time away from what
                  she loved doing—creating amazing freeze-dried products. The
                  existing solutions were either too expensive or ridiculously
                  complex for a small operation like hers.
                </p>
                <p className="text-gray-600">
                  With my background in software development, I decided to build
                  something specifically for her business—something simple,
                  practical, and affordable that would handle all the CFIA
                  requirements without the complexity.
                </p>
              </div>
              <div className="bg-[#00bf63]/5 p-6 rounded-lg">
                <h3 className="font-bold mb-3">Started</h3>
                <p className="mb-4">3 years ago</p>

                <h3 className="font-bold mb-3">Focus</h3>
                <p className="mb-4">
                  CFIA traceability compliance for small Canadian food
                  businesses
                </p>

                <h3 className="font-bold mb-3">Mission</h3>
                <p>
                  Helping food producers focus on their craft while easily
                  meeting regulatory requirements
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">My Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00bf63]">
                    User-Focused Design
                  </h3>
                  <p className="text-gray-600">
                    I built TraceIT with my mom in mind, focusing on simplicity
                    and efficiency. Every feature was designed to minimize the
                    time spent on record-keeping while ensuring complete CFIA
                    compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00bf63]">
                    Continuous Refinement
                  </h3>
                  <p className="text-gray-600">
                    Over the past three years, I've refined the system through
                    three major iterations, each time making it more intuitive
                    and effective based on real-world use in my mom's daily
                    operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00bf63]">
                    Affordability
                  </h3>
                  <p className="text-gray-600">
                    From day one, I've been committed to keeping TraceIT
                    affordable. I believe that food safety compliance shouldn't
                    be a luxury that only large corporations can afford.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00bf63]">
                    Canadian-Specific
                  </h3>
                  <p className="text-gray-600">
                    Unlike generic systems, TraceIT is specifically designed for
                    Canadian regulations. Every feature is built with CFIA
                    requirements in mind, making compliance straightforward.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Development Journey</h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#00bf63]/10 flex items-center justify-center">
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Understanding the Problem
                    </h3>
                    <p className="text-gray-600">
                      I began by studying the CFIA requirements in depth and
                      observing my mom's daily workflow to understand exactly
                      where the pain points were. This hands-on experience
                      shaped my understanding of what was truly needed.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#00bf63]/10 flex items-center justify-center">
                      <span className="font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">First Version</h3>
                    <p className="text-gray-600">
                      The first version of TraceIT focused on solving the core
                      traceability requirements: tracking one step back and one
                      step forward, food identification, and record keeping. My
                      mom was the first and most valuable beta tester.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#00bf63]/10 flex items-center justify-center">
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Refinement & Improvement
                    </h3>
                    <p className="text-gray-600">
                      Over the next two years, I refined the user interface,
                      added reporting capabilities, enhanced the data management
                      features, and expanded to support different types of food
                      products—all based on real feedback from daily use in my
                      mom's business.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#00bf63]/10 flex items-center justify-center">
                      <span className="font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Today's TraceIT</h3>
                    <p className="text-gray-600">
                      Today's version of TraceIT represents three years of
                      real-world testing and refinement. It's a mature,
                      battle-tested solution that I'm now making available to
                      help other small food businesses across Canada meet their
                      traceability requirements efficiently and affordably.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00bf63]/5 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                Try the Solution That Helped My Mom's Business
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                After seeing how much TraceIT helped simplify compliance for my
                mom's freeze-dried food business, I know it can help your food
                business too. I'm excited to share this practical solution with
                other Canadian food producers who want to focus on creating
                amazing food—not paperwork.
              </p>
              <Button
                asChild
                className="bg-[#00bf63] hover:bg-[#00a857] border-0"
              >
                <Link href="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
