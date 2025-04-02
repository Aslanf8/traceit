import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TraceIT Benefits | Beyond CFIA Compliance",
  description:
    "Discover how TraceIT delivers real business value beyond compliance, with cost savings, efficiency gains, and better food safety management.",
};

export default function BenefitsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
