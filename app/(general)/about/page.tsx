import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the About Company Page",
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
