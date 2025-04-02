import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TraceIT Features | CFIA Traceability Tools",
  description:
    "Explore the purpose-built features that make TraceIT the simplest way for Canadian food businesses to meet CFIA traceability requirements.",
};

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
