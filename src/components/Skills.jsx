const skillGroups = [
  {
    title: 'Languages',
    accent: 'from-[#9f85ff] to-[#6d50f5]',
    icon: '</>',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 84 },
      { name: 'Java', level: 80 },
    ],
  },
  {
    title: 'Technologies',
    accent: 'from-[#1b1a5e] to-[#211a68]',
    icon: '{ }',
    skills: [
      { name: 'React', level: 89 },
      { name: 'Node.js', level: 83 },
      { name: 'Spring Boot', level: 76 },
      { name: 'Flutter', level: 72 },
    ],
  },
  {
    title: 'Tools',
    accent: 'from-[#111b4d] to-[#1a1c61]',
    icon: '[]',
    skills: [
      { name: 'AWS', level: 87 },
      { name: 'MongoDB', level: 78 },
      { name: 'Databricks', level: 73 },
      { name: 'Git / Linux', level: 86 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative px-1 py-10 sm:px-2 lg:py-14">
      <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
        <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
        Skill_Map: Indexed
      </div>

      <div className="mb-12 text-center">
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] text-white/90 sm:text-5xl lg:text-6xl">
          <span className="block">My</span>
          <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
            Skills
          </span>
        </h2>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
          >
            <div
              className={`flex min-h-[18rem] flex-col justify-end rounded-[24px] border border-[#7c63ff] bg-gradient-to-br ${group.accent} p-8 shadow-[0_10px_30px_rgba(0,0,0,0.18)]`}
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[22px] border border-white/20 text-3xl font-semibold text-white/55">
                {group.icon}
              </div>
              <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-white">
                {group.title}
              </h3>
            </div>

            {group.skills.map((skill) => (
              <article
                key={skill.name}
                className="group flex min-h-[18rem] flex-col overflow-hidden rounded-[24px] border border-[#7455ff] bg-white/95 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                <div className="flex flex-1 flex-col items-center justify-center px-6 py-8 text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[24px] border border-dashed border-[#7455ff]/30 bg-[#f7f4ff] text-xs uppercase tracking-[0.24em] text-[#9079ff]/50">
                    Empty
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-3xl font-bold text-[#475569]">
                    {skill.name}
                  </h4>
                </div>

                <div className="max-h-0 overflow-hidden bg-[#211957] px-5 opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:py-5 group-hover:opacity-100">
                  <p className="text-center font-['Space_Grotesk'] text-4xl font-bold text-[#d87cff]">
                    {skill.level}%
                  </p>
                  <div className="mt-5 h-4 rounded-[999px] bg-white/85">
                    <div
                      className="h-full rounded-[999px] bg-gradient-to-r from-[#8e64ff] to-[#c887ff]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
