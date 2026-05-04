import { readFileSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { parseLegalDocument } from "@/lib/parse-legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy — NuvedaAI",
  description:
    "How Nuveda AI LLC collects, uses, discloses, and protects personal information when you use our services.",
  openGraph: {
    title: "Privacy Policy — NuvedaAI",
    description:
      "How Nuveda AI LLC collects, uses, discloses, and protects personal information when you use our services.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const raw = readFileSync(
    path.join(process.cwd(), "legal", "privacy.txt"),
    "utf8",
  );
  const doc = parseLegalDocument(raw);

  return <LegalPage doc={doc} />;
}
