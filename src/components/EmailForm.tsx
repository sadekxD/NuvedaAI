"use client";

import { useState, type FormEvent } from "react";

export default function EmailForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-fade-up flex items-center gap-3">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        <p className="font-body text-brand-sub text-base font-light">
          You&rsquo;re on the list&thinsp;&mdash;&thinsp;we&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="group relative flex flex-col gap-3 sm:flex-row sm:gap-0"
      >
        {/* Gradient border wrapper */}
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
              className="h-14 w-full bg-transparent px-6 font-body text-sm font-light text-brand-text outline-none placeholder:text-brand-muted sm:w-72 md:w-80"
            />
            <button
              type="submit"
              className="group/btn relative h-14 cursor-pointer overflow-hidden whitespace-nowrap rounded-b-[calc(1rem-1px)] bg-brand-accent px-8 font-body text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(111,47,255,0.5)] active:scale-[0.98] sm:rounded-none sm:rounded-r-[calc(1rem-1px)]"
            >
              <span className="relative z-10">Be First to Know</span>
              <span className="absolute inset-0 bg-linear-to-r from-brand-accent to-[#9055ff] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            </button>
          </div>
        </div>
      </form>
      <p className="font-body text-[0.7rem] font-light text-brand-dim">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
