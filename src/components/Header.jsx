const navItems = ['Home', 'Hobbies','Projects', 'Experience', 'Skills','Contact'];

function Header() {
  return (
    <header className="terminal-shell relative overflow-hidden rounded-[28px] border border-[#5bff87]/30 bg-[#07110c]/90 shadow-[0_0_0_1px_rgba(14,255,107,0.06),0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="terminal-glow pointer-events-none absolute inset-0" />
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col gap-4 border-b border-[#5bff87]/20 px-5 py-4 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 font-['Share_Tech_Mono'] text-[0.95rem] uppercase tracking-[0.16em] text-[#7dff9b]">
            <span className="flex h-2.5 w-2.5 rounded-[999px] bg-[#23ff4f] shadow-[0_0_14px_rgba(35,255,79,0.95)]" />
            <span>{'>'} `~/portfolio`</span>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#9cffb2] sm:gap-3">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-[999px] border px-3 py-2 transition duration-200 ${
                  index === 0
                    ? 'border-[#5bff87] bg-[#163f22] text-[#d9ffe4] shadow-[0_0_18px_rgba(35,255,79,0.18)]'
                    : 'border-transparent bg-transparent hover:border-[#5bff87]/35 hover:bg-[#112016] hover:text-[#d9ffe4]'
                }`}
              >
                [{item}]
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
