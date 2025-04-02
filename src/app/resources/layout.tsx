import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CFIA Traceability Resources - TraceIT",
  description:
    "Access comprehensive CFIA traceability resources, including fact sheets, videos, interactive tools, and regulatory guidelines to help your Canadian food business comply with Safe Food for Canadians Regulations.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
