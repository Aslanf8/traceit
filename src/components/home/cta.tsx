import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get CFIA-Compliant Today Without Breaking the Bank
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            Join other Canadian food businesses that trust TraceIT for their
            traceability requirements. Affordable, easy to implement, and built
            specifically for CFIA compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="/demo">Request a Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-blue-700"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <p className="mt-8 text-blue-100">
            No long-term contracts. Straightforward pricing. Expert support.
          </p>
        </div>
      </div>
    </section>
  );
}
