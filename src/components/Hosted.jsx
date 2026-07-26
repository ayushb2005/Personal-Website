const hostedServices = [
  {
    id: 'jellyfin',
    name: 'Jellyfin (Streaming)',
    url: 'https://tv.ayushbhanushali.com',
  },
  {
    id: 'immich',
    name: 'Immich (Pics)',
    url: 'https://immich.ayushbhanushali.com',
  },
  {
    id: 'qbittorrent',
    name: 'qBittorrent (Download)',
    url: 'https://qb.ayushbhanushali.com',
  },
  {
    id: 'radarr',
    name: 'Radarr (Movies)',
    url: 'https://radarr.ayushbhanushali.com',
  },
  {
    id: 'sonarr',
    name: 'Sonarr (Shows)',
    url: 'https://sonarr.ayushbhanushali.com',
  },
  {
    id: 'prowlarr',
    name: 'Prowlarr (Indexer)',
    url: 'https://prowlarr.ayushbhanushali.com',
  },
];

function Hosted() {
  return (
    <main className="portfolio-page min-h-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <section id="hosted" className="mx-auto max-w-7xl px-1 py-10 sm:px-2 lg:py-14">
        <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
          <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
          Hosted_Services: Online
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] text-white/90 sm:text-5xl lg:text-6xl">
              <span className="block">Open the stack</span>
              <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
                from one place.
              </span>
            </h2>

            {/* <p className="mt-6 max-w-2xl font-['Share_Tech_Mono'] text-lg leading-9 text-[#b8c8bb] sm:text-xl">
              A simple launchpad for the services running on my homelab. Clean links,
              quick access, and enough context to know where each one goes.
            </p> */}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {hostedServices.map((service, index) => (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noreferrer"
                className="group terminal-shell relative overflow-hidden rounded-[24px] border border-[#5bff87]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#23ff4f]/40 hover:bg-[#0d130f] hover:shadow-[0_18px_45px_rgba(0,0,0,0.32)]"
              >
                <div className="terminal-glow pointer-events-none absolute inset-0 opacity-60" />
                <div className="relative z-10">
                  <p className="font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#7dff9b]">
                    {/* {service.id} */}
                  </p>
                  <h3 className="mt-4 text-center font-['Space_Grotesk'] text-2xl font-bold text-white/90">
                    {service.name}
                  </h3>
                  <div className="mt-8 flex items-center justify-end border-t border-[#5bff87]/12 pt-4">
                    <span className="font-['Share_Tech_Mono'] text-xl text-[#23ff4f] transition group-hover:translate-x-1">
                      {'>'}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hosted;