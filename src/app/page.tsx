import Link from "next/link";
import Logo from "@/components/logo";
import IconMark from "@/components/icon-mark";
import EmailForm from "@/components/email-form";

export default function Home() {
  return (
    <div className="grain relative flex min-h-screen flex-col overflow-x-clip bg-brand-darker">
      {/* Hero background GIF */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/hero-background.gif"
          alt=""
          className="h-full w-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-darker/40 via-transparent to-brand-darker" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-darker via-brand-darker/60 to-transparent" />
      </div>

      {/* Decorative icon mark */}
      <div className="pointer-events-none absolute -right-[8vw] top-1/2 w-[min(72vw,20rem)] max-w-[min(20rem,90%)] -translate-y-[45%] sm:-right-[5vw] sm:w-[65vw] sm:max-w-180 md:w-[50vw] animate-breathe">
        <IconMark className="h-full w-full opacity-40 drop-shadow-[0_0_120px_rgba(111,47,255,0.15)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full min-w-0 shrink-0 px-4 pt-4 sm:px-6 sm:pt-5 md:px-10 md:pt-6 lg:px-14 lg:pt-8 animate-fade-up">
        <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-3">
          <Link
            href="/"
            className="inline-flex shrink-0 outline-offset-4 transition-opacity hover:opacity-90"
          >
            <Logo className="h-auto w-[6.75rem] sm:w-28 md:w-36" />
          </Link>

          <div className="flex w-full min-w-0 flex-[1_0_100%] flex-wrap items-center justify-between gap-x-3 gap-y-2 sm:flex-initial sm:basis-auto sm:w-auto sm:justify-end sm:gap-4 md:gap-6">
            <nav
              className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 font-body text-[0.6rem] font-medium uppercase tracking-[0.1em] text-brand-dim sm:gap-x-2 sm:text-[0.65rem] sm:tracking-[0.16em] md:text-[0.7rem] md:tracking-[0.18em]"
              aria-label="Legal"
            >
              <Link
                href="/terms"
                className="rounded-sm py-0.5 transition-colors hover:text-brand-mid"
              >
                Terms
              </Link>
              <span className="shrink-0 text-brand-dim/45 select-none" aria-hidden>
                ·
              </span>
              <Link
                href="/privacy"
                className="rounded-sm py-0.5 transition-colors hover:text-brand-mid"
              >
                Privacy
              </Link>
            </nav>

            <div
              className="flex shrink-0 items-center gap-2 sm:gap-2.5"
              role="status"
              aria-label="In development"
            >
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent animate-pulse-dot sm:h-2 sm:w-2" aria-hidden />
              <span
                className="hidden font-body text-xs font-medium uppercase tracking-[0.18em] text-brand-muted sm:inline sm:tracking-[0.2em]"
              >
                In development
              </span>
              <span
                className="font-body text-[0.62rem] font-medium uppercase tracking-[0.12em] text-brand-muted sm:hidden"
                aria-hidden
              >
                Dev
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Accent line */}
      <div
        className="glow-line relative z-10 mx-4 mt-4 shrink-0 sm:mx-6 md:mx-10 md:mt-5 lg:mx-14 animate-fade-up opacity-40"
        style={{ animationDelay: "0.05s" }}
      />

      {/* Main content */}
      <main className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-14 xl:px-20">
        <div className="w-full max-w-3xl min-w-0">
          {/* Eyebrow */}
          <div
            className="animate-fade-up mb-4 flex flex-wrap items-center gap-3 md:mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brand-mid sm:text-[0.7rem] sm:tracking-[0.3em]">
              Coming soon
            </span>
            <span className="hidden h-px w-10 min-[340px]:block sm:w-12 bg-brand-mid/40" />
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-[clamp(1.5rem,4.2vw+0.5rem,4.5rem)] font-bold leading-[1.08] tracking-tight text-balance text-brand-text"
            style={{ animationDelay: "0.2s" }}
          >
            A new standard
            <br />
            for{" "}
            <span className="gradient-text">AI powered</span>
            <br />
            creative production
            <span className="gradient-text">.</span>
          </h1>

          {/* Body */}
          <p
            className="animate-fade-up mt-4 max-w-lg font-body text-sm font-light leading-relaxed text-brand-muted md:mt-6 md:text-base md:leading-[1.75]"
            style={{ animationDelay: "0.35s" }}
          >
            NuvedaAI is launching soon&thinsp;&mdash;&thinsp;a standalone platform
            designed to help creators, brands, and teams generate and enhance
            content through powerful AI&nbsp;workflows.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-up mt-6 md:mt-8"
            style={{ animationDelay: "0.5s" }}
          >
            <EmailForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 flex shrink-0 flex-col gap-3 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 md:pb-6 lg:px-14 animate-fade-up"
        style={{ animationDelay: "0.65s" }}
      >
        <p className="font-body text-xs font-light text-brand-dim">
          &copy; {new Date().getFullYear()} NuvedaAI. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-body text-xs font-light">
          <Link
            href="/terms"
            className="text-brand-dim transition-colors hover:text-brand-mid"
          >
            Terms of Use
          </Link>
          <span className="text-brand-dim/50" aria-hidden>
            ·
          </span>
          <Link
            href="/privacy"
            className="text-brand-dim transition-colors hover:text-brand-mid"
          >
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
