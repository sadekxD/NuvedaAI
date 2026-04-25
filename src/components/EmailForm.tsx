"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { subscribe } from "@/app/actions/subscribe";

const NOTIFICATION_DURATION = 5000;

export default function EmailForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [dismissing, setDismissing] = useState(false);
  const [existing, setExisting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function dismiss() {
    setDismissing(true);
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
      setExisting(false);
      setDismissing(false);
    }, 300);
  }

  useEffect(() => {
    if (status === "success") {
      timerRef.current = setTimeout(dismiss, NOTIFICATION_DURATION);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [status]);

  function handleDismiss() {
    if (timerRef.current) clearTimeout(timerRef.current);
    dismiss();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    const result = await subscribe(email);

    if (result.success) {
      setExisting(!!result.existing);
      setStatus("success");
    } else {
      setErrorMsg(result.error ?? "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`success-card relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border bg-brand-darker/80 px-6 py-5 backdrop-blur-sm transition-all duration-300 ${
          existing ? "border-amber-500/20" : "border-brand-accent/20"
        } ${dismissing ? "opacity-0 translate-y-2" : "animate-success-in"}`}
      >
        <div className={`pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl animate-success-glow ${existing ? "bg-amber-500/15" : "bg-brand-accent/15"}`} />
        <div
          className={`pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl animate-success-glow ${existing ? "bg-amber-500/10" : "bg-emerald-500/10"}`}
          style={{ animationDelay: "0.3s" }}
        />

        <button
          onClick={handleDismiss}
          className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-brand-muted transition-colors hover:bg-white/10 hover:text-brand-text cursor-pointer"
          aria-label="Dismiss"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="relative flex items-center gap-3">
          {existing ? (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
              <svg
                className="h-4 w-4 text-amber-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
          ) : (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
              <svg
                className="h-4 w-4 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M4 12l6 6L20 6"
                  className="animate-draw-check"
                  pathLength={1}
                />
              </svg>
            </div>
          )}
          <p className="font-display text-base font-semibold text-brand-text">
            {existing ? "You\u2019re already on the list!" : "You\u2019re on the list!"}
          </p>
        </div>

        <p className="relative font-body text-sm font-light leading-relaxed text-brand-muted">
          {existing ? (
            <>
              This email is already signed up.
              <br />
              We&rsquo;ll let you know when we launch!
            </>
          ) : (
            <>
              We&rsquo;ll notify you as soon as NuvedaAI is ready.
              <br />
              Stay tuned for something special.
            </>
          )}
        </p>

        <div className="pointer-events-none absolute right-6 top-12 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="inline-block h-1 w-1 rounded-full bg-brand-accent animate-sparkle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden">
          <div
            className={`h-full ${existing ? "bg-amber-500/40" : "bg-brand-accent/40"}`}
            style={{
              animation: `shrinkBar ${NOTIFICATION_DURATION}ms linear forwards`,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="group relative flex flex-col gap-3 sm:flex-row sm:gap-0"
      >
        <div
          className="relative flex flex-col rounded-2xl p-px sm:flex-row transition-all duration-500"
          style={{
            background: focused
              ? "linear-gradient(135deg, #6f2fff 0%, #aa80ff 50%, #6f2fff 100%)"
              : "linear-gradient(135deg, #3d2e5c 0%, #1e1238 50%, #3d2e5c 100%)",
          }}
        >
          <div className="flex flex-col rounded-[calc(1rem-1px)] bg-brand-darker sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Enter your email"
              disabled={status === "loading"}
              className="h-14 w-full bg-transparent px-6 font-body text-sm font-light text-brand-text outline-none placeholder:text-brand-muted disabled:opacity-50 sm:w-72 md:w-80"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="group/btn relative h-14 cursor-pointer overflow-hidden whitespace-nowrap rounded-b-[calc(1rem-1px)] bg-brand-accent px-8 font-body text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(111,47,255,0.5)] active:scale-[0.98] disabled:cursor-wait sm:rounded-none sm:rounded-r-[calc(1rem-1px)]"
            >
              <span className="relative z-10">
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Joining…
                  </span>
                ) : (
                  "Be First to Know"
                )}
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-brand-accent to-[#9055ff] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            </button>
          </div>
        </div>
        
      </form>
      {status === "error" && errorMsg && (
        <p className="animate-fade-up font-body text-[0.75rem] font-light text-red-400">
          {errorMsg}
        </p>
      )}
      <p className="font-body text-xs font-medium text-brand-muted">
        Get a 25% launch discount code sent straight to your inbox!
      </p>
      <p className="font-body text-[0.7rem] font-light text-brand-dim">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
