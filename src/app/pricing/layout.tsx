import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TraceIT Custom Solutions | AI-Powered CFIA Compliance",
  description:
    "Get a custom traceability solution built for your business. With AI-powered development, I can build faster and more affordably than traditional software development.",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
