import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TraceIT | Our Story",
  description:
    "The journey of creating a simple CFIA compliance solution for a small freeze-dried food business that grew into a tool for all Canadian food producers.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
