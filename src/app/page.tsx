import Logo from "@/components/Logo";
import IconMark from "@/components/IconMark";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  return (
    <div className="grain relative flex flex-col min-h-screen bg-brand-darker">
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
      <div className="pointer-events-none absolute -right-[5vw] top-1/2 -translate-y-[45%] w-[65vw] max-w-180 md:w-[50vw] animate-breathe">
        <IconMark className="h-full w-full opacity-40 drop-shadow-[0_0_120px_rgba(111,47,255,0.15)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex shrink-0 items-center justify-between px-6 pt-5 md:px-10 md:pt-6 lg:px-14 lg:pt-8 animate-fade-up">
        <Logo className="w-28 md:w-36" />
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-accent animate-pulse-dot" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">
            In development
          </span>
        </div>
      </header>

      {/* Accent line */}
      <div
        className="glow-line relative z-10 mx-6 mt-4 shrink-0 md:mx-10 md:mt-5 lg:mx-14 animate-fade-up opacity-40"
        style={{ animationDelay: "0.05s" }}
      />

      {/* Main content */}
      <main className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-6 py-6 md:px-10 md:py-8 lg:px-14 xl:px-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="animate-fade-up mb-4 flex items-center gap-4 md:mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-mid">
              Coming soon
            </span>
            <span className="h-px w-12 bg-brand-mid/40" />
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-3xl font-bold leading-[1.08] tracking-tight text-brand-text sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
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
        className="relative z-10 flex shrink-0 items-center justify-between px-6 pb-5 md:px-10 md:pb-6 lg:px-14 animate-fade-up"
        style={{ animationDelay: "0.65s" }}
      >
        <p className="font-body text-xs font-light text-brand-dim">
          &copy; {new Date().getFullYear()} NuvedaAI. All rights reserved.
        </p>
        <span className="font-body text-xs font-light text-brand-dim">
          nuvedaai.com
        </span>
      </footer>
    </div>
  );
}
