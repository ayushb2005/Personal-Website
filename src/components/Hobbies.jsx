import YouTubeShort from './YoutubeUrl';

const hobbyCards = [
  {
    title: 'Lifting',
    description:''
  },
  {
    title: 'Muay Thai',
    description:''
  }
  ,
  {
    title: 'Basketball',
    description:
      'Pickup runs, fast transitions, and the kind of competitive energy that clears my head after long coding sessions.',
  },
  {
    title: 'Driving Bikes/Cars',
    description:
      'I enjoy the mechanical feel, speed, and focus that comes with being behind the wheel or out on a bike.',
  },
  {
    title: 'Building Outside Class',
    description:
      'A lot of my free time still turns into side projects, experiments, and small systems I want to make feel polished.',
  },
];

function Hobbies() {
  return (
    <section id="hobbies" className="relative overflow-hidden px-1 py-10 sm:px-2 lg:py-14">
      <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
        <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
        Hobby_Log: Active
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,420px)] lg:items-start">
        <div>
          <h2 className="max-w-4xl font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] text-white/90 sm:text-5xl lg:text-6xl">
            <span className="block">What I do</span>
            <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
              outside the terminal.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl font-['Share_Tech_Mono'] text-lg leading-9 text-[#b8c8bb] sm:text-xl">
            Outside software, I like staying active, being on the move, and
            picking up interests that feel high-energy and hands-on.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hobbyCards.map((hobby) => (
              <article
                key={hobby.title}
                className="rounded-[18px] border border-[#5bff87]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-5 py-6"
              >
                <p className="font-['Share_Tech_Mono'] text-[0.65rem] uppercase tracking-[0.28em] text-[#8da298]">
                  Interest
                </p>
                <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-bold text-white/90">
                  {hobby.title}
                </h3>
                {/* <p className="mt-3 font-['Share_Tech_Mono'] text-sm leading-7 text-[#b8c8bb]">
                  {hobby.description}
                </p> */}
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[24px] border border-[#5bff87]/14 bg-[#0a120d]/90 p-4 shadow-[0_0_30px_rgba(23,255,92,0.08)]">
            <p className="mb-4 font-['Share_Tech_Mono'] text-[0.68rem] uppercase tracking-[0.24em] text-[#7dff9b]">
              Short_Reel // 01
            </p>
            <div className="mx-auto max-w-[220px]">
              <YouTubeShort url="https://www.youtube.com/shorts/6SvEt5DgwUg" />
            </div>
          </div>

          <div className="rounded-[24px] border border-[#5bff87]/14 bg-[#0a120d]/90 p-4 shadow-[0_0_30px_rgba(23,255,92,0.08)]">
            <p className="mb-4 font-['Share_Tech_Mono'] text-[0.68rem] uppercase tracking-[0.24em] text-[#7dff9b]">
              Short_Reel // 02
            </p>
            <div className="mx-auto max-w-[220px]">
              <YouTubeShort url="https://www.youtube.com/shorts/vKpCcrKTS3U" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
