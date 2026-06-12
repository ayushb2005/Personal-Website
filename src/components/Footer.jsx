const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ayushb2005' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushbhanushali/' },
  { label : 'Email', href: 'mailto:contact@ayushbhanushali.com' },
];

function Footer() {
  return (
    <footer className="terminal-shell relative overflow-hidden rounded-[22px] border border-[#5bff87]/20 bg-[#07110c]/85">
      <div className="terminal-glow pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative z-10 flex flex-col gap-4 px-5 py-4 font-['Share_Tech_Mono'] text-[0.72rem] uppercase tracking-[0.18em] text-[#8ce9a4] sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {/* <span className="font-semibold text-[#1bff43]">Status: Online</span> */}
          <span className="font-semibold text-[#1bff43]"> © 2025 Ayush Bhanushali</span>
        </div>

        <nav
          aria-label="Footer social links"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#4dcfff]"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#cffff4]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
