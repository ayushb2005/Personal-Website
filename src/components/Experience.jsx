const experiences = [
  {
    company: 'Cadent',
    role: 'QA Engineering Intern',
    type: 'Internship',
    date: 'Mar 2026 - May 2026',
    location: 'Remote',
    side: 'left',
    icon: 'QA',
    points: [
      'Performed QA for Data Engineering user stories, validating APIs, Airflow DAGs, and pipeline functionality.',
      'Developed automated Databricks and Apache Spark QA workflows using SQL, BigQuery, and Selenium.',
      'Created 15+ test cases to validate over 1 million DCM reporting rows and support QA sign-off for production deployments.',
    ],
  },
  {
    company: 'Armor1 AI',
    role: 'Software Engineering Intern',
    type: 'Internship',
    date: 'Jul 2025 - Mar 2026',
    location: 'San Francisco, CA',
    side: 'right',
    icon: 'SE',
    points: [
      'Integrated an AI-driven risk-evaluation platform into Glean for MCP and agentic IDE risk analysis.',
      'Engineered automated Claude Desktop risk analysis that detected high-risk configurations on 60% of tested devices.',
      'Built a Python ETL pipeline that scraped and validated MCP servers from seven sources, adding 15,000+ entries into a PostgreSQL catalogue.',
      'Developed and deployed a TypeScript MCP server on Google Cloud to support OWASP-aligned security scans.',
    ],
  },
  {
    company: 'Stony Brook University Division of Information Technology',
    role: 'Software Engineering Intern',
    type: 'Internship',
    date: 'Feb 2025 - May 2025',
    location: 'Stony Brook, NY',
    side: 'left',
    icon: 'IT',
    points: [
      'Performed full-stack development and maintenance for IT dashboards serving 5,000+ active users across campus.',
      'Developed a C# API enabling SSO authentication with LDAP and Active Directory to manage admin roles and permissions.',
      'Added a favorites feature for heat-sensor cards in React and fixed a reload bug in a printer dashboard built with Vue.',
    ],
  },
  {
    company: 'Umee.Social',
    role: 'Software Developer',
    type: 'Remote Role',
    date: 'Dec 2024 - Mar 2025',
    location: 'Remote',
    side: 'right',
    icon: 'SD',
    points: [
      'Built backend services for a social media app connecting users in shared physical spaces.',
      'Led planning and development of a serverless chat feature in Flutter with AWS SNS, S3, and Lambda.',
      'Built an AWS Lambda pipeline to convert message data to Parquet and cut messaging workflow costs by 50%.',
      'Developed secure profile-picture upload functionality by integrating AWS Amplify with S3.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative px-1 py-10 sm:px-2 lg:py-14">
      <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
        <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
        Experience_Log: Archived
      </div>

      <div className="mb-12 text-center">
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] text-white/90 sm:text-5xl lg:text-6xl">
          <span className="block">My</span>
          <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
            Experience
          </span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-7 top-0 h-full w-px bg-[#5bff87]/20 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experiences.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="relative grid gap-5 md:grid-cols-[1fr_88px_1fr] md:items-start"
            >
              <div
                className={`md:block ${item.side === 'right' ? 'md:order-3' : 'md:order-1'}`}
              >
                <div
                  className={`rounded-[22px] border border-[#5bff87]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${
                    item.side === 'right' ? 'md:ml-4' : 'md:mr-4'
                  }`}
                >
                  <p className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                    {item.company}
                  </p>
                  <p className="mt-1 font-['Space_Grotesk'] text-xl font-semibold text-[#dfffe7]">
                    {item.role}
                  </p>
                  <p className="mt-1 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#7dff9b]">
                    {`${item.type} // ${item.location}`}
                  </p>

                  <ul className="mt-5 space-y-3 font-['Space_Grotesk'] text-lg leading-8 text-[#c9d3cb]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 shrink-0 bg-[#1bff43]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative flex items-start md:order-2 md:justify-center">
                <div className="flex items-center gap-4 md:flex-col">
                  {/* <div className="flex h-14 w-14 items-center justify-center rounded-[999px] border border-[#5bff87]/20 bg-[#0f1712] font-['Share_Tech_Mono'] text-sm font-bold uppercase tracking-[0.14em] text-[#23ff4f] shadow-[0_0_0_8px_rgba(7,17,12,0.95)]">
                    {item.icon}
                  </div> */}
                  <p className="font-['Space_Grotesk'] text-xl font-semibold text-white/85 md:text-center md:text-2xl">
                    {item.date}
                  </p>
                </div>
              </div>

              <div
                className={`hidden md:block ${item.side === 'right' ? 'md:order-1' : 'md:order-3'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
