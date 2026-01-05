import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TraceIT Benefits | Beyond CFIA Compliance",
  description:
    "Discover how custom traceability solutions deliver real business value beyond compliance, with cost savings through AI-powered development, efficiency gains, and better food safety management.",
};

export default function BenefitsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
