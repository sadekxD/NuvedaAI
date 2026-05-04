import { readFileSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { parseLegalDocument } from "@/lib/parse-legal-doc";

export const metadata: Metadata = {
  title: "Terms of Use — NuvedaAI",
  description:
    "Terms governing access to and use of Nuveda AI LLC websites, applications, APIs, and related services.",
  openGraph: {
    title: "Terms of Use — NuvedaAI",
    description:
      "Terms governing access to and use of Nuveda AI LLC websites, applications, APIs, and related services.",
    type: "website",
  },
};

export default function TermsOfUsePage() {
  const raw = readFileSync(
    path.join(process.cwd(), "legal", "terms.txt"),
    "utf8",
  );
  const doc = parseLegalDocument(raw);

  return <LegalPage doc={doc} />;
}
