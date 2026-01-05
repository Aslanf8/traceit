import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              CFIA Compliance{" "}
              <span className="text-[#00bf63]">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Developed from real-world experience with my parents&apos;
              freeze-dried business, I now build custom traceability solutions
              for Canadian food businesses. With my professional experience in
              AI and LLMs, combined with having built TraceIT for my parents, I
              can build you a solution 10x faster and more affordably than
              traditional software development.
            </p>
            <p className="text-gray-600 mb-8">
              After three years and multiple iterations refining this system for
              my parents&apos; small business, I&apos;m now offering this
              solution to help other Canadian food businesses with their
              traceability needs. This is just me, Aslan Farboud, doing this on
              the side because I have a passion for building software that
              solves real problems. If it seems like a good fit, I&apos;d be
              happy to help.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
                <Link href="/features">View Features</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#00bf63]/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00bf63]/10 rounded-full"></div>
              <div className="relative shadow-xl rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/wck-dashboard-example.png"
                  alt="TraceIT Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
