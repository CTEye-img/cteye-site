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
    <main className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-xl">CTEye</a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#tech" className="hover:opacity-70">Technology</a>
            <a href="#validation" className="hover:opacity-70">Evidence</a>
            <a href="#pilot" className="hover:opacity-70">Pilot Programs</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#pilot" className="inline-flex items-center rounded-xl border border-gray-900 px-3 py-1.5 text-sm font-medium hover:bg-gray-900 hover:text-white">Get Early Access</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Where Performance 
              <span className="block">Meets Brain Science</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              CTEye turns every impact into actionable, understandable data that protects athletes and redefines the future of contact sports.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pilot" className="inline-flex items-center rounded-xl bg-black text-white px-4 py-2.5 text-sm font-medium hover:opacity-90">Apply for Pilot</a>
              <a href="#investors" className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-50">For Investors</a>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              Non-medical performance product. Medical studies in progress.
            </div>
          </div>
          <div className="md:pl-8">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-sm uppercase tracking-widest text-gray-400">Live Demo Placeholder</div>
                <p className="mt-2 text-gray-600">Embed a short loop/gif of the dashboard reacting to a punch, or a hero product render.</p>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center">Replace with a GIF/video or product image.</div>
          </div>
        </div>
                <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <Stat kpi="< 50 g" label="Most hits in training" />
          <Stat kpi="> 80%" label="Jaw-noise artefact reduction" />
          <Stat kpi="0–100" label="BrainScore for session load" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-6">
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
      <section id="tech" className="border-y border-gray-200 bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card title="Smart Mouthguard" body="An OPRO-made mouth guard houses sensors that record every impact the moment it happens." />
            <Card title="Clean Signal" body="Built-in filtering cuts out jaw chatter, ensuring all impacts are captured accuratley.." />
            <Card title="BrainStrain™ Map" body="Proprietary models translate raw motion into a clear picture of how the brain experiences each impact." />
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card title="Live Coach View" body="The app streams a live impact feed with intensity and impact types so coaches can adjust on the spot." />
            <Card title="Recovery Guidance" body="BrainScore tracks cumulative load and quick cognitive checks flag when to back off or push." />
            <Card title="Secure Sharing" body="Athletes choose who sees the data, with simple exports for coaches, medics, or investors." />
          </div>
        </div>
      </section>

      {/* Roadmap (horizontal timeline) */}
      <section id="validation" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Roadmap</h2>

        <div className="mt-8 relative">
          {/* horizontal line */}
          <div className="absolute left-6 right-6 top-10 h-px bg-gray-200" />

          {/* timeline items */}
          <div className="relative flex gap-8 overflow-x-auto px-6 py-10">
            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-black border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-medium">Now — Development & early pilot testing + validation</div>
              <div className="mt-2 text-sm text-gray-700">Active development, prototype refinement and validation through early partner pilots.</div>
            </div>

            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-gray-400 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-medium">Sep 2026 — Targeted product launch</div>
              <div className="mt-2 text-sm text-gray-700">Public launch and broader availability of the CTEye system (target date).</div>
            </div>

            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-gray-400 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-medium">Jan 2027 — EU expansion</div>
              <div className="mt-2 text-sm text-gray-700">Begin wider rollout across European markets.</div>
            </div>

            <div className="relative flex-shrink-0 w-64 text-center">
              <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-gray-400 border-2 border-white transform -translate-x-1/2" />
              <div className="mt-6 text-sm font-medium">Jun 2027+ — US expansion & medical certification</div>
              <div className="mt-2 text-sm text-gray-700">Post-launch expansion to the US and pursue medical certifications to diagnose major and minor brain injuries.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot / Investors */}
      <section id="pilot" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Pilot with CTEye</h2>
            <p className="mt-3 text-gray-700">We’re onboarding a small number of clubs and fighters. Tell us about your setup.</p>

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
                    <span className="text-sm text-gray-700">Role</span>
                    <select name="role" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900">
                      <option>Athlete</option>
                      <option>Coach</option>
                      <option>Club / Federation</option>
                      <option>Medical / Research</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm text-gray-700">Sport</span>
                    <select name="sport" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900">
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
                <textarea name="notes" placeholder="What do you want to learn or prove?" className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 min-h-[96px]"></textarea>

                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input type="checkbox" name="consent" required className="mt-1" />
                  <span>I agree to be contacted about the pilot and acknowledge my data will be handled per CTEye’s privacy policy.</span>
                </label>

                <input type="hidden" name="_subject" value="New CTEye Pilot Application" />

                <button type="submit" className="w-full rounded-xl bg-black text-white px-4 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-60" disabled={submitState === 'loading'}>
                  {submitState === 'loading' ? 'Submitting…' : 'Apply'}
                </button>

                {submitState === 'error' && (
                  <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">{errorMsg}</div>
                )}
              </form>
            )}

            <p className="mt-3 text-xs text-gray-500">We’ll reply within a few days. Limited slots.</p>
          </div>
          <div id="investors" className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">For Investors</h2>
            <p className="mt-3 text-gray-700">Building the safety and performance layer for combat sports. We’re raising to complete clinical validation and scale manufacturing.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/CTEye_OnePager.pdf" className="inline-flex items-center rounded-xl border border-gray-900 px-4 py-2.5 text-sm font-medium hover:bg-gray-900 hover:text-white">Download One-Pager</a>
              <a href="/CTEye_Deck.pdf" className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-50">Request Deck</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Prefer to talk? <a href="mailto:press@cteye.ai" className="underline">press@cteye.ai</a></p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 md:py-24"> 
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Faq q="Is this a medical device?" a="Not yet. The current product is for training/performance insights. Clinical validation and regulatory submissions are planned." />
          <Faq q="What sports do you support?" a="We’re focused on boxing and MMA first, then expanding to other contact sports." />
          <Faq q="How accurate is BrainStrain?" a="Models are trained on finite-element simulations and refined with real-world data; accuracy improves as we learn per athlete." />
          <Faq q="Who owns the data?" a="Athletes own their data. Sharing with coaches/clinicians is opt-in and revocable." />
          <Faq q="How is CTEye different from competitors?" a="CTEye doesn’t just record impacts; it reveals what they mean for your brain. Powered by Finite Element BrainStrain™ modeling, it transforms every hit into a live map of neurological stress and recovery. More than protection, it’s performance redefined, giving athletes and teams the clarity to train harder, recover smarter, and stay in the game longer." />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-medium text-gray-900">CTEye</div>
            <div className="text-xs">© {new Date().getFullYear()} CTEye Ltd. All rights reserved.</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@cteye.co.uk" className="underline">hello@cteye.ai</a>
            <a href="#pilot" className="inline-flex items-center rounded-xl border border-gray-300 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">Get Early Access</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 flex items-center gap-4">
      <div className="text-2xl font-semibold tracking-tight">{kpi}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
      <div className="font-medium">{title}</div>
      <p className="mt-2 text-sm text-gray-700">{body}</p>
    </div>
  );
}

function Input({ name, label, placeholder, type = "text", required = false }: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-700">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
    </label>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-gray-200 p-5 group">
      <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
        <span>{q}</span>
        <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="mt-3 text-sm text-gray-700">{a}</p>
    </details>
  );
}
