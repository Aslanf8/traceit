import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TraceIT Pricing | Affordable CFIA Compliance",
  description:
    "Simple, transparent pricing plans designed to make CFIA traceability compliance accessible for food businesses of all sizes.",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
