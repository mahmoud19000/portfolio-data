import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { aboutHighlights } from "@/data/portfolio";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              About Me
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Turning Raw Data Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Decisions
              </span>
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed mb-16">
            I'm a data engineer specializing in building the infrastructure that
            turns messy, scattered data into clean, actionable insights. From
            automated scrapers that collect data at scale to ETL pipelines that
            transform it — I handle the full data lifecycle.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aboutHighlights.map((item, i) => (
              <div
                key={item.label}
                className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-shadow">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 backdrop-blur-sm flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-cyan-400/40">
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="text-gray-400 text-sm mt-1">Years building data solutions</p>
              <p className="text-xs text-gray-500 mt-3">
                Freelance &amp; enterprise projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
