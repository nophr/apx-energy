export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background video — spinning wind turbines, with the static image as poster/fallback */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover object-center"
          src="/hero-windfarm-10s.mp4"
          poster="/hero.png"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl" data-parallax="0.16">
          <p className="hero-label text-brand-600 text-xs font-bold tracking-widest uppercase mb-5">
            Asia Pacific · Renewable Energy Solutions · Power Quality
          </p>
          <h1 className="hero-title text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Building Asia‑Pacific's{' '}
            <span className="text-brand-600">Clean Energy Future</span>
          </h1>
          <p className="hero-sub text-brand-200 text-lg leading-relaxed mb-8 max-w-xl">
            Turnkey renewable energy and power quality solutions — from residential
            rooftop solar to utility-scale power plants. One accountable partner
            across Australia, Cambodia, and Vietnam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#about"
              className="hero-cta inline-block bg-brand-700 hover:bg-brand-800 text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm text-center"
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className="hero-cta inline-block border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Quick market pills */}
          <div className="hero-pills flex flex-wrap gap-2 mt-10">
            {['Australia', 'Cambodia', 'Vietnam'].map(m => (
              <span
                key={m}
                className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
