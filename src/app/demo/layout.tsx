import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a TraceIT Demo | See It in Action",
  description:
    "Schedule a personalized demo to see how TraceIT can simplify CFIA traceability compliance for your specific food business needs.",
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
