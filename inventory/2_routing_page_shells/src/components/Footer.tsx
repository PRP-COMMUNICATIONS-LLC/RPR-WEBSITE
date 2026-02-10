
/**
 * TS-Λ3 // GLOBAL FOOTER [v2.0.5]
 * Path: src/components/Footer.tsx
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-zinc-500 py-16 px-6 md:px-12 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
            © {currentYear} RPR COMMUNICATIONS, LLC.
          </p>
          <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest opacity-60">
            SG-CANONICAL-2026 // BASELINE v4.5.0
          </p>
        </div>
        <p className="text-[10px] font-mono text-zinc-600 text-center md:text-right leading-loose uppercase tracking-widest max-w-sm opacity-60">
          All operations are governed under internal sovereign protocols and Relational Accountability Models.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
