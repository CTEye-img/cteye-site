"use client";
// Drop this file in a Next.js app as app/page.tsx (App Router) or pages/index.tsx (Pages Router)
// Requires Tailwind CSS (https://tailwindcss.com/docs/guides/nextjs)
// Replace placeholders (deck URL, form action, press email) before publishing.

import React, { useState } from "react";

export default function CTEyeLanding() {
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  async function handlePilotSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    // Replace with your Formspree endpoint
    const endpoint = "https://formspree.io/f/mdkprjyy";
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });
      if (res.ok) {
        setSubmitState('success');
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setErrorMsg(j?.errors?.[0]?.message || 'Something went wrong. Please email hello@cteye.ai.');
        setSubmitState('error');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or email hello@cteye.ai.');
      setSubmitState('error');
    }
  }
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-900/10 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-xl text-slate-900">CTEye</a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-900">
            <a href="#tech" className="transition-colors hover:text-orange-500">Technology</a>
            <a href="#validation" className="transition-colors hover:text-orange-500">Evidence</a>
            <a href="#pilot" className="transition-colors hover:text-orange-500">Pilot Programs</a>
            <a href="#faq" className="transition-colors hover:text-orange-500">FAQ</a>
            <a href="#contact" className="transition-colors hover:text-orange-500">Contact</a>
          </nav>
          <a href="#pilot" className="inline-flex items-center rounded-xl bg-orange-500 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">Get Early Access</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,#f97316,transparent_55%)]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,#f97316,transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                Neuromech for the ring
              </p>
              <h1 className="mt-4 text-4xl md:text-[2.9rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                Where Performance
                <span className="block text-orange-300">Meets Brain Science</span>
              </h1>
              <p className="mt-6 text-lg text-slate-200">
                CTEye captures the story behind every hit so athletes, coaches, and investors see risk and opportunity in real time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#pilot" className="inline-flex items-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                  Apply for Pilot
                </a>
                <a href="#investors" className="inline-flex items-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  For Investors
                </a>
              </div>
              <div className="mt-6 text-xs text-slate-300">
                Non-medical performance product. Medical studies in progress.
              </div>
            </div>
            <div className="md:pl-8">
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-orange-500/10 backdrop-blur flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-sm uppercase tracking-[0.28em] text-orange-200/80">Live Demo</div>
                  <p className="mt-3 text-sm text-slate-200/90">Drop in a highlight reel or dashboard loop showing impacts turning into BrainScore.</p>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-300 text-center">Swap in a GIF/video or product render.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Stat kpi="< 50 g" label="Typical training impacts stay under control" />
          <Stat kpi="> 80%" label="Less jaw noise, more reliable signal" />
          <Stat kpi="0–100" label="BrainScore makes load and recovery obvious" />
        </div>

        <div className="mt-12 text-center">
          <div className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-6">
            Trusted by early partners and collaborators
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            <img src="/logos/opro.svg" alt="OPRO" className="h-8 w-auto" />
            <img src="/logos/loughborough.svg" alt="Loughborough University" className="h-8 w-auto" />
            <img src="/logos/uk-sport.svg" alt="UK Sport" className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="tech" className="border-y border-slate-900/60 bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">How it works</p>
          <h2 className="mt-3 text-3xl md:text-[2.4rem] font-semibold tracking-tight text-white">From bite to BrainScore</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300">
            Hardware, clean signal capture, and neuro modeling combine so every session ends with a clear risk readout built for combat sports.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card title="Smart Mouthguard" body="An OPRO-fit guard houses motion sensors that record every hit the moment it happens." />
            <Card title="Clean Signal" body="Built-in filtering cuts out jaw chatter and sparring noise, keeping data trustworthy." />
            <Card title="BrainStrain™ Map" body="Proprietary models translate raw motion into a clear picture of how the brain experiences each impact." />
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card title="Live Coach View" body="The app streams a live impact feed with intensity and punch type so coaches can adjust on the spot." />
            <Card title="Recovery Guidance" body="BrainScore tracks cumulative load and quick cognitive checks flag when to back off or push." />
            <Card title="Secure Sharing" body="Athletes choose who sees the data, with simple exports for coaches, medics, or investors." />
          </div>
        </div>
      </section>

      {/* Roadmap (horizontal timeline) */}
      <section id="validation" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">Validation roadmap</p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Roadmap</h2>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          We’re scaling UFC-proven hardware and software through measured stages so every milestone locks in evidence and manufacturability.
        </p>

        <div className="mt-10 relative">
          {/* horizontal line */}
          <div className="absolute left-6 right-6 top-10 h-px bg-slate-200" />

          {/* timeline items */}
          <div className="relative flex gap-8 overflow-x-auto px-6 py-10">
            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-orange-500 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-semibold text-slate-900">Now — Development & early pilot testing + validation</div>
              <div className="mt-2 text-sm text-slate-600">Active development, prototype refinement, and validation through early partner pilots.</div>
            </div>

            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-slate-300 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-semibold text-slate-900">Sep 2026 — Targeted product launch</div>
              <div className="mt-2 text-sm text-slate-600">Public launch and broader availability of the CTEye system (target date).</div>
            </div>

            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-slate-300 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-semibold text-slate-900">Jan 2027 — EU expansion</div>
              <div className="mt-2 text-sm text-slate-600">Begin wider rollout across European markets.</div>
            </div>

            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-slate-300 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-semibold text-slate-900">Jun 2027+ — US expansion & medical certification</div>
              <div className="mt-2 text-sm text-slate-600">Post-launch expansion to the US and pursuit of medical certifications to diagnose major and minor brain injuries.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot / Investors */}
      <section id="pilot" className="border-y border-slate-900/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-white/10 bg-white/90 p-6 text-slate-900 shadow-xl shadow-orange-500/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Pilot programme</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Pilot with CTEye</h2>
              <p className="mt-3 text-slate-700">We’re onboarding a small number of clubs and fighters. Tell us about your setup.</p>

              {submitState === "success" ? (
                <div className="mt-4 rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800">
                  Thanks — your application has been received. We’ll be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handlePilotSubmit} className="mt-4 space-y-3">
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <Input name="name" label="Name" placeholder="Your full name" required />
                <Input name="org" label="Club / Organization" placeholder="Team or gym" />
                <Input name="email" label="Email" placeholder="you@example.com" type="email" required />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm text-slate-700">Role</span>
                    <select name="role" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Athlete</option>
                      <option>Coach</option>
                      <option>Club / Federation</option>
                      <option>Medical / Research</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm text-slate-700">Sport</span>
                    <select name="sport" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Boxing</option>
                      <option>MMA</option>
                      <option>Muay Thai</option>
                      <option>Rugby</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <Input name="athletes" label="# of athletes (approx)" placeholder="e.g., 12" type="number" />
                <Input name="location" label="Location" placeholder="City, Country" />
                <textarea name="notes" placeholder="What do you want to learn or prove?" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[96px]"></textarea>

                <label className="flex items-start gap-2 text-sm text-slate-700">
                  <input type="checkbox" name="consent" required className="mt-1" />
                  <span>I agree to be contacted about the pilot and acknowledge my data will be handled per CTEye’s privacy policy.</span>
                </label>

                <input type="hidden" name="_subject" value="New CTEye Pilot Application" />

                <button type="submit" className="w-full rounded-xl bg-orange-500 text-slate-950 px-4 py-2.5 text-sm font-semibold transition hover:bg-orange-400 disabled:opacity-60" disabled={submitState === 'loading'}>
                  {submitState === 'loading' ? 'Submitting…' : 'Apply'}
                </button>

                {submitState === 'error' && (
                  <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">{errorMsg}</div>
                  )}
                </form>
              )}

              <p className="mt-3 text-xs text-slate-500">We’ll reply within a few days. Limited slots.</p>
            </div>
            <div id="investors" className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">For investors</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Building the safety & performance layer</h2>
              <p className="mt-3 text-slate-200">We’re raising to complete clinical validation and scale manufacturing of the CTEye system.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/CTEye_OnePager.pdf" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-orange-300 transition hover:bg-white/20">Download One-Pager</a>
                <a href="/CTEye_Deck.pdf" className="inline-flex items-center rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Request Deck</a>
              </div>
              <p className="mt-3 text-xs text-slate-300">Prefer to talk? <a href="mailto:press@cteye.ai" className="underline">press@cteye.ai</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">Questions</p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">FAQ</h2>
        <p className="mt-4 max-w-2xl text-base text-slate-600">Answers we cover in investor rooms and gym walk-throughs. Anything more? Reach out.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Faq q="Is this a medical device?" a="Not yet. The current product is for training/performance insights. Clinical validation and regulatory submissions are planned." />
          <Faq q="What sports do you support?" a="We’re focused on boxing and MMA first, then expanding to other contact sports." />
          <Faq q="How accurate is BrainStrain?" a="Models are trained on finite-element simulations and refined with real-world data; accuracy improves as we learn per athlete." />
          <Faq q="Who owns the data?" a="Athletes own their data. Sharing with coaches/clinicians is opt-in and revocable." />
          <Faq q="How is CTEye different from competitors?" a="CTEye doesn’t just record impacts; it reveals what they mean for your brain. Powered by Finite Element BrainStrain™ modeling, it transforms every hit into a live map of neurological stress and recovery. More than protection, it’s performance redefined, giving athletes and teams the clarity to train harder, recover smarter, and stay in the game longer." />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-900/60 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-lg font-semibold text-white">CTEye</div>
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} CTEye Ltd. All rights reserved.</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@cteye.ai" className="underline decoration-orange-400 decoration-2 underline-offset-4">hello@cteye.ai</a>
            <a href="#pilot" className="inline-flex items-center rounded-xl bg-orange-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-orange-400">Get Early Access</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-orange-500/5 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative text-2xl font-semibold tracking-tight text-slate-900">{kpi}</div>
      <div className="relative mt-2 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-xl">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative font-semibold text-slate-900">{title}</div>
      <p className="relative mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function Input({ name, label, placeholder, type = "text", required = false }: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
    </label>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500/50">
      <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold text-slate-900">
        <span>{q}</span>
        <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-sm text-slate-600">{a}</p>
    </details>
  );
}
