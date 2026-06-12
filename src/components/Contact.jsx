import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  body: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.body}`
    );

    window.location.href = `mailto:contact@ayushbhanushali.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-1 py-10 sm:px-2 lg:py-14">
      <div className="mb-7 inline-flex items-center gap-3 border border-[#1eff62]/20 bg-[#0f1913]/80 px-3 py-2 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#5ff0ff]">
        <span className="h-5 w-1 bg-[#23ff4f] shadow-[0_0_12px_rgba(35,255,79,0.8)]" />
        Contact_Link: Open
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] text-white/90 sm:text-5xl lg:text-6xl">
            <span className="block">Let&apos;s build</span>
            <span className="mt-2 inline-block bg-[#1bff43] px-3 py-1 text-[#03210a] shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
              something together.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl font-['Share_Tech_Mono'] text-lg leading-9 text-[#b8c8bb] sm:text-xl">
            Send a note through the form and your email client will open a draft
            directly to my inbox. 
          </p>

          <div className="mt-8 rounded-[22px] border border-[#5bff87]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6">
            <p className="font-['Share_Tech_Mono'] text-[0.68rem] uppercase tracking-[0.24em] text-[#7dff9b]">
              Direct_Channel
            </p>
            <a
              href="mailto:contact@ayushbhanushali.com"
              className="mt-3 inline-block font-['Space_Grotesk'] text-2xl font-bold text-white transition hover:text-[#5ff0ff]"
            >
              contact@ayushbhanushali.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="terminal-shell relative overflow-hidden rounded-[26px] border border-[#5bff87]/20 bg-[#08110d]/88 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-8"
        >
          <div className="terminal-glow pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative z-10 space-y-6">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.2em] text-[#7dff9b]"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-[18px] border border-[#5bff87]/16 bg-[#0d1712] px-4 py-4 font-['Space_Grotesk'] text-lg text-white outline-none transition placeholder:text-[#6f7d72] focus:border-[#23ff4f]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.2em] text-[#7dff9b]"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-[18px] border border-[#5bff87]/16 bg-[#0d1712] px-4 py-4 font-['Space_Grotesk'] text-lg text-white outline-none transition placeholder:text-[#6f7d72] focus:border-[#23ff4f]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="contact-body"
                className="mb-2 block font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.2em] text-[#7dff9b]"
              >
                Message
              </label>
              <textarea
                id="contact-body"
                name="body"
                required
                rows="7"
                value={form.body}
                onChange={handleChange}
                className="w-full rounded-[18px] border border-[#5bff87]/16 bg-[#0d1712] px-4 py-4 font-['Space_Grotesk'] text-lg text-white outline-none transition placeholder:text-[#6f7d72] focus:border-[#23ff4f]"
                placeholder="Tell me what you want to build, ask about, or collaborate on."
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-14 items-center justify-center border border-[#23ff4f] bg-[#1bff43] px-7 font-['Share_Tech_Mono'] text-sm font-semibold uppercase tracking-[0.2em] text-[#03210a] transition hover:-translate-y-0.5 hover:bg-[#74ff8f]"
            >
              [ Send Email ]
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
