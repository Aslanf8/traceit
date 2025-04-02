import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TraceIT | Get in Touch",
  description:
    "Have questions about CFIA compliance or TraceIT? Reach out directly and get personalized assistance for your food business.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
