const metrics = [
  { label: 'Experience', value: '3 Years' },
  { label: 'Favorite Languages', value: 'Python/TS/JS' },
  { label: 'Deployments', value: '128+ Successful' },
];

function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-1 pb-3 pt-8 sm:px-2 sm:pt-12 lg:pt-14"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.03)_100%)] opacity-80" />

      <div className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
          <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
          Home_Log: Active
        </div>

        <div className="max-w-5xl font-['Space_Grotesk'] text-[#f2f5f3]">
          <p className="mb-2 font-['Share_Tech_Mono'] text-3xl font-bold uppercase tracking-[0.08em] text-[#22ff4d] sm:text-4xl md:text-5xl">
            {'>'}
          </p>
          <h1 className="text-4xl font-bold leading-[0.92] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
            <span className="block text-white/90">Hello. My name is </span>
            <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
              Ayush Bhanushali
            </span>
            <span className="ml-2 hidden align-middle text-white/65 lg:inline-block">
              _
            </span>
          </h1>
        </div>

        <p className="mt-7 max-w-3xl font-['Share_Tech_Mono'] text-lg leading-9 text-[#b8c8bb] sm:text-xl">
            Computer Science & Applied Mathematics and Statistics Student @ <strong>Stony Brook University</strong> <br></br>
            I love building scalable software, data-driven systems, and AI-powered applications.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex min-h-14 items-center justify-center border border-[#23ff4f] bg-[#1bff43] px-7 font-['Share_Tech_Mono'] text-sm font-semibold uppercase tracking-[0.2em] text-[#03210a] transition hover:-translate-y-0.5 hover:bg-[#74ff8f]"
          >
            [ Explore Projects ]
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex min-h-14 items-center justify-center border border-[#23ff4f]/12 bg-[#0d130f]/80 px-7 font-['Share_Tech_Mono'] text-sm uppercase tracking-[0.22em] text-[#23ff4f] transition hover:-translate-y-0.5 hover:border-[#23ff4f]/30 hover:bg-[#111913]"
          >
            $ View_Resume
            <span className="ml-3 text-base">{'->'}</span>
          </a>
        </div>

        <div className="mt-16 grid gap-4 border-t border-[#5bff87]/10 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pt-10">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[18px] border border-[#5bff87]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-5 py-6"
            >
              <p className="font-['Share_Tech_Mono'] text-[0.65rem] uppercase tracking-[0.28em] text-[#8da298]">
                {metric.label}
              </p>
              <p className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-white/90">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
