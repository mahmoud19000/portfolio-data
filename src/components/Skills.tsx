import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Core Skills
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Tools &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group relative px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:-translate-y-0.5 cursor-default ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-white font-medium text-sm sm:text-base">
                  {skill.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-cyan-400/60 font-medium px-2 py-0.5 rounded-full bg-cyan-400/5 border border-cyan-400/10">
                  {skill.category}
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/0 to-blue-600/0 group-hover:from-cyan-400/5 group-hover:to-blue-600/5 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
