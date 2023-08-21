import type { Metadata } from "next";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Next Auth TS",
  description:
    "Simple Authentication App built using NextJS + TypeScript + MongoDB",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
