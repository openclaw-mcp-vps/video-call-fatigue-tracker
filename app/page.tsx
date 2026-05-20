export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Remote Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Stop Meeting Burnout<br />
          <span className="text-[#58a6ff]">Before It Starts</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          MeetingHealth connects to Google Calendar and Outlook to detect fatigue patterns — back-to-back sessions, overloaded days, and more — then gives your team AI-powered scheduling recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📅", title: "Calendar Integration", desc: "Syncs with Google Calendar & Outlook in seconds." },
            { icon: "🔥", title: "Fatigue Detection", desc: "Flags back-to-back meetings, long sessions & overloaded days." },
            { icon: "🤖", title: "AI Recommendations", desc: "Personalized scheduling suggestions to protect focus time." }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Per manager. Unlimited team members.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Google Calendar & Outlook sync",
              "Real-time fatigue dashboard",
              "AI scheduling recommendations",
              "Weekly team health reports",
              "Slack & email alerts",
              "14-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which calendar apps are supported?",
              a: "MeetingHealth integrates with Google Calendar and Microsoft Outlook via OAuth. Setup takes under two minutes and requires no IT involvement."
            },
            {
              q: "How does fatigue detection work?",
              a: "We analyze patterns like consecutive meetings without breaks, sessions exceeding 90 minutes, and days where meeting time exceeds 50% of working hours — then surface these as health alerts."
            },
            {
              q: "Is my calendar data private?",
              a: "Yes. We only read event metadata (duration, frequency, gaps) — never titles or attendee details. Data is encrypted at rest and never sold to third parties."
            }
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} MeetingHealth. All rights reserved.
      </footer>
    </main>
  );
}
