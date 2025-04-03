import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-[#00bf63]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to simplify your CFIA compliance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            After three years of real-world testing in my parents' freeze-dried
            food business, TraceIT is helping Canadian food businesses meet
            their traceability requirements without complex systems or high
            costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-[#00bf63] hover:bg-[#00a857] border-0"
            >
              <Link href="/demo">Request a Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-[#00bf63] border-[#00bf63] hover:bg-[#00bf63]/10"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <p className="mt-8 text-gray-600">
            Have questions? I'd be happy to discuss how TraceIT can work for
            your specific food business. No $5,000 implementation fees or
            expensive monthly subscriptions - just practical traceability tools.
          </p>
        </div>
      </div>
    </section>
  );
}
