import { useEffect, useState } from 'react';

const projects = [
  {
    id: 'vox',
    name: 'Vox',
    version: 'v1.4.2',
    path: '~/projects/vox',
    command: 'cat README.md',
    description:
      'An AI-powered web application for car dealerships to never miss out on leads \
       that lets customers view, compare, book test drives, and buy cars all through an AI voice assistant.',
    techStack: ['React', 'Python', 'MiniMax', 'Moss', 'LiveKit', 'Unsiloed'],
    sourceUrl: 'https://github.com/ayushb2005/Vox',
  },
  {
    id: 'whisperboard',
    name: 'WhisperBoard',
    version: 'v1.4.2',
    path: '~/projects/whisperboard',
    command: 'cat README.md',
    description:
      'An AI-powered web application that has a bot to join Google Meets, take notes, and the display a Miro Diagram of topics, insights, decisions, and actions from the meeting.',
    techStack: ['React', 'Python', 'Websockets', 'Attendee API', 'Gemini API'],
    sourceUrl: 'https://github.com/ayushb2005/whisperboard',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    version: 'v2.0.0',
    path: '~/projects/portfolio',
    command: 'cat SYSTEM.md',
    description:
      'A one-page portfolio website with a terminal-inspired interface',
    techStack: ['React', 'Tailwind CSS', 'CRA', 'Responsive UI'],
    sourceUrl: 'https://github.com/ayushb2005/Personal-Website',
  },
  {
    id: 'hotel_booking_prediction',
    name: 'Hotel Booking Prediction',
    version: 'v2.0.0',
    path: '~/projects/hotel_booking_prediction',
    command: 'cat SYSTEM.md',
    description:
      'Built and evaluated machine learning models to predict hotel booking cancellations using exploratory data analysis, feature engineering, and classification techniques. Compared Logistic Regression, Random Forest, and XGBoost to identify key factors influencing reservation cancellations.',
    techStack: ['Jupyter Notebook', 'Python'],
    sourceUrl: 'https://github.com/ayushb2005/hotel_booking_prediction',
  },
    {
    id: 'rapid_cart',
    name: 'Rapid Cart',
    version: 'v2.0.0',
    path: '~/projects/rapid_cart',
    command: 'cat SYSTEM.md',
    description:
      'Built a fullstack application for a E-Commerce Store similar to Amazon where users can add to cart, delete, and checkout items.',
    techStack: ['Java', 'Spring Boot','Mongo DB', 'React', 'AWS', 'NGINX'],
    sourceUrl: 'https://github.com/ayushb2005/RapidCart',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="relative overflow-hidden px-1 py-10 sm:px-2 lg:py-14">
        <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
          <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
          Project_Index: Live
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div>
            <h2 className="max-w-4xl font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] text-white/90 sm:text-5xl lg:text-6xl">
              <span className="block">Open a project</span>
              <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
                through the terminal.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl font-['Share_Tech_Mono'] text-lg leading-9 text-[#b8c8bb] sm:text-xl">
              Click any project name to launch its terminal view. The modal opens
              over the page, and the top-left close control drops you right back
              into the portfolio.
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group w-full rounded-[22px] border border-[#5bff87]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-5 py-5 text-left transition hover:border-[#23ff4f]/35 hover:bg-[#0d130f]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-['Share_Tech_Mono'] text-[0.66rem] uppercase tracking-[0.28em] text-[#8da298]">
                      Project_{String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-bold text-white/90">
                      {project.name}
                    </h3>
                    <p className="mt-3 font-['Share_Tech_Mono'] text-sm leading-7 text-[#b8c8bb]">
                      {project.description}
                    </p>
                  </div>
                  <span className="font-['Share_Tech_Mono'] text-xl text-[#23ff4f] transition group-hover:translate-x-1">
                    {'>'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020403]/82 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[26px] border border-[#4eff7d]/20 bg-[#2a2a2a] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-[#353535] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                  className="flex h-4 w-4 items-center justify-center rounded-[999px] bg-[#ff8a80] text-[0.55rem] text-[#2d120f] transition hover:scale-110"
                >
                  x
                </button>
                <span className="h-4 w-4 rounded-[999px] bg-[#ffd180]" />
                <span className="h-4 w-4 rounded-[999px] bg-[#32ff5c]" />
              </div>
              <p className="text-center font-['Share_Tech_Mono'] text-[0.68rem] uppercase tracking-[0.2em] text-[#b7b7b7]">
                Terminal - {selectedProject.name}.go - 80x24
              </p>
              <div className="w-[52px]" />
            </div>

            <div className="bg-[#2a2a2a] px-6 py-7 sm:px-8 sm:py-9">
              <p className="font-['Share_Tech_Mono'] text-lg font-bold leading-8 text-[#f0f0f0] sm:text-[1.7rem]">
                <span className="text-[#20ff55]">guest@arch:</span>{' '}
                <span className="text-[#26d8ff]">{selectedProject.path}</span>{' '}
                <span className="text-[#f0f0f0]">$ {selectedProject.command}</span>
              </p>

              <div className="mt-8">
                <h3 className="font-['Share_Tech_Mono'] text-3xl font-bold uppercase tracking-[0.05em] text-[#1bff43] sm:text-4xl">
                  # {selectedProject.name} {selectedProject.version}
                </h3>

                <p className="mt-6 max-w-4xl font-['Space_Grotesk'] text-xl font-medium leading-10 text-[#d9d9d9] sm:text-[2rem] sm:leading-[3rem]">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-8">
                <p className="font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.24em] text-[#b8c8bb]">
                  Tech_Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {selectedProject.techStack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-3 font-['Share_Tech_Mono'] text-base font-semibold text-[#d9d9d9] sm:text-lg"
                    >
                      <span className="h-2.5 w-2.5 bg-[#1bff43]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={selectedProject.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center border border-[#2eff5d]/30 bg-transparent px-7 font-['Share_Tech_Mono'] text-sm font-semibold uppercase tracking-[0.2em] text-[#1bff43] transition hover:border-[#1bff43] hover:bg-[#0f1611]"
                >
                  {'<>'} Source Code
                </a>
              </div>

              <p className="mt-10 font-['Share_Tech_Mono'] text-lg font-bold text-[#f0f0f0] sm:text-[1.7rem]">
                <span className="text-[#20ff55]">guest@arch:</span>{' '}
                <span className="text-[#26d8ff]">{selectedProject.path}</span>{' '}
                <span className="text-[#f0f0f0]">$_</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
