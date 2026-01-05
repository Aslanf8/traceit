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
              The journey of creating a simple solution for my parents&apos;
              freeze-dried food business that grew into something that can help
              Canadian food businesses with traceability.
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
                  TraceIT began three years ago when my parents started a small
                  freeze-dried food business and quickly found themselves
                  overwhelmed with the traceability requirements mandated by the
                  Canadian Food Inspection Agency&apos;s Safe Food for Canadians
                  Regulations (SFCR).
                </p>
                <p className="text-gray-600 mb-4">
                  The administrative work was taking up nearly 40% of their
                  weekly hours. When they looked for software solutions, they
                  found that traditional options were prohibitively expensive
                  for a small business. This experience taught me that there had
                  to be a better way—and with how powerful AI has become for
                  software development, there is.
                </p>
                <p className="text-gray-600">
                  With my background in software development and specialization
                  in AI and LLMs, I built the first version of TraceIT over a
                  weekend to help track their ingredient lots and production
                  batches. It was basic but immediately cut their paperwork time
                  in half. Now, I&apos;m doing this on the side—combining my
                  passion for software development with the practical experience
                  of having solved this problem for my parents&apos; business.
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
                  Helping food businesses meet regulatory requirements without
                  excessive cost or complexity
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
                    I built TraceIT with my parents in mind, focusing on
                    simplicity and efficiency. Every feature was designed to
                    minimize the time spent on record-keeping while ensuring
                    complete CFIA compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00bf63]">
                    Continuous Refinement
                  </h3>
                  <p className="text-gray-600">
                    Over three years, we&apos;ve improved the system based on
                    daily use - adding barcode scanning, one-click recall
                    reports, and supplier management. What used to take days now
                    takes minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00bf63]">
                    Affordability
                  </h3>
                  <p className="text-gray-600">
                    From day one, I&apos;ve been committed to making TraceIT
                    affordable for small businesses. The huge gap between what
                    regulators require and what small producers can practically
                    implement is exactly what TraceIT addresses.
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
                      observing my parents&apos; daily workflow to identify the
                      specific challenges they faced. When CFIA requested a mock
                      recall, it took them almost two full days to compile all
                      the necessary information.
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
                      parents were the first and most valuable testers,
                      providing immediate feedback on what worked and what
                      didn&apos;t.
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
                      parents&apos; business.
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
                    <h3 className="text-xl font-bold mb-2">
                      Today&apos;s TraceIT
                    </h3>
                    <p className="text-gray-600">
                      Today&apos;s version of TraceIT represents three years of
                      real-world testing in an actual business. It&apos;s a
                      mature, practical solution that I&apos;m now making
                      available to help other Canadian food businesses meet
                      their traceability requirements efficiently and
                      affordably.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00bf63]/5 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                Try TraceIT For Your Business
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                After seeing how TraceIT simplified compliance for my
                parents&apos; freeze-dried food business, I believe it can help
                your business too. This is just me, Aslan Farboud, doing this on
                the side because I have a passion for building software that
                solves real problems. If TraceIT seems like a good fit for your
                business, I&apos;d be happy to help. I&apos;m not a large
                company with investors or sales teams—just someone who solved a
                problem for my parents and wants to share that solution with
                other Canadian food businesses who might find it useful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  asChild
                  className="bg-[#00bf63] hover:bg-[#00a857] border-0"
                >
                  <Link href="/demo">Request a Demo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-[#00bf63] border-[#00bf63] hover:bg-[#00bf63]/10"
                >
                  <a
                    href="https://www.aslanfarboud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View My Portfolio
                  </a>
                </Button>
              </div>
              <div className="flex justify-center gap-4 text-sm">
                <a
                  href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#00bf63] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
