import Link from "next/link";
import Logo from "@/components/Logo";
import type { ParsedLegalDocument } from "@/lib/parse-legal-doc";

type Props = {
  doc: ParsedLegalDocument;
};

export default function LegalPage({ doc }: Props) {
  const introParagraphs = doc.intro.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <div className="grain relative flex min-h-screen flex-col bg-brand-darker">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-linear-to-b from-brand-darker/80 via-transparent to-brand-darker" />
      </div>

      <header className="relative z-10 flex shrink-0 items-center justify-between px-6 pt-5 md:px-10 md:pt-6 lg:px-14 lg:pt-8">
        <Link href="/" className="outline-offset-4 transition-opacity hover:opacity-90">
          <Logo className="w-28 md:w-36" />
        </Link>
        <Link
          href="/"
          className="font-body text-xs font-medium uppercase tracking-[0.2em] text-brand-muted transition-colors hover:text-brand-mid"
        >
          Back
        </Link>
      </header>

      <div
        className="glow-line relative z-10 mx-6 mt-4 shrink-0 md:mx-10 md:mt-5 lg:mx-14 opacity-40"
        aria-hidden
      />

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:pb-16">
        <article
          className={[
            "prose prose-invert max-w-none font-body",
            "prose-sm md:prose-base",
            "prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight",
            "prose-h1:mb-1 prose-h1:text-balance prose-h1:text-3xl prose-h1:font-bold prose-h1:text-brand-text md:prose-h1:text-4xl",
            "prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-brand-dim/50 prose-h2:pb-2 prose-h2:text-base prose-h2:font-semibold prose-h2:text-brand-sub md:prose-h2:text-lg",
            "prose-p:text-brand-muted prose-p:leading-relaxed",
            "prose-strong:text-brand-sub prose-strong:font-semibold",
          ].join(" ")}
        >
          <h1>{doc.title}</h1>
          <p className="not-prose mb-8 mt-2 text-xs uppercase tracking-[0.2em] text-brand-dim">
            Effective Date:{" "}
            <span className="font-body font-normal normal-case tracking-normal text-brand-muted">
              {doc.effectiveDate}
            </span>
          </p>

          {introParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <hr className="not-prose my-10 border-brand-dim/30" />

          {doc.sections.map((section) => (
            <section key={section.num} className="scroll-mt-8">
              <h2>
                {section.num}. {section.title}
              </h2>
              <div className="not-prose mt-4 whitespace-pre-line text-sm font-light leading-relaxed text-brand-muted md:text-base">
                {section.body}
              </div>
            </section>
          ))}
        </article>
      </main>

      <footer className="relative z-10 flex shrink-0 flex-col gap-3 border-t border-brand-dim/40 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 md:py-6 lg:px-14">
        <p className="font-body text-xs font-light text-brand-dim">
          &copy; {new Date().getFullYear()} NuvedaAI. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-xs font-light">
          <Link href="/terms" className="text-brand-dim transition-colors hover:text-brand-mid">
            Terms of Use
          </Link>
          <span className="text-brand-dim/50" aria-hidden>
            ·
          </span>
          <Link href="/privacy" className="text-brand-dim transition-colors hover:text-brand-mid">
            Privacy Policy
          </Link>
          <span className="text-brand-dim/50" aria-hidden>
            ·
          </span>
          <span className="text-brand-dim">nuvedaai.com</span>
        </div>
      </footer>
    </div>
  );
}
