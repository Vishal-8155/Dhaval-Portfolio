import React from "react";
import "../index.css";

export default function LayoutGlassSidebar() {
  return (
    <div className="relative w-screen h-screen bg-slate-900 text-slate-50 font-sans flex overflow-hidden shadow-2xl border border-slate-800">
      {/* Simulated browser frame */}
      <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 border-b border-slate-700 flex items-center justify-start px-4 space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Sidebar */}
      <aside className="z-10 w-20 mt-8 backdrop-blur-md bg-slate-800/40 border-r border-slate-800 flex flex-col items-center py-6 space-y-6 shadow-inner">
        <div className="text-violet-500 text-2xl font-bold">🜂</div>
        <nav className="flex flex-col space-y-4 text-sm text-slate-300">
          <a href="#" className="hover:text-violet-400 transition-colors">Home</a>
          <a href="#" className="hover:text-violet-400 transition-colors">Projects</a>
          <a href="#" className="hover:text-violet-400 transition-colors">About</a>
          <a href="#" className="hover:text-violet-400 transition-colors">Contact</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mt-8 backdrop-blur-md bg-slate-900/40 p-16 overflow-y-auto">
        <section className="max-w-4xl mx-auto">
          <h1
            className="font-[Space Grotesk] text-[64px] md:text-[80px] text-violet-500 font-light tracking-normal leading-tight animate-blur-word"
          >
            {`Elevate Your Digital Experience`.split(" ").map((word, index) => (
              <span key={index} style={{ "--word-index": index } as React.CSSProperties}>
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <h2 className="text-[24px] md:text-[28px] text-slate-200 mt-4 font-[Inter]">
            Designing with precision and emotion, powered by next-gen technology
          </h2>
          <p className="text-[16px] md:text-[18px] mt-6 text-slate-400 font-[Inter] max-w-2xl border-t border-slate-800 pt-6">
            This layout demonstrates a modern glass-style sidebar interface with a dark theme.
            Elements use Tailwind CSS with violet accents, slate backgrounds, and XXL shadows to
            deliver an elegant browser-style UI.
          </p>
        </section>
      </main>
    </div>
  );
}