import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Hero />

      {/* ── Spacer section so scroll-trigger has room ── */}
      <section className="relative z-30 min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <p className="text-neutral-500 tracking-widest text-sm uppercase">
          Continue exploring &darr;
        </p>
      </section>
    </main>
  );
}

export default App;
