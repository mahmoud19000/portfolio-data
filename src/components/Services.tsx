import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/portfolio";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Services
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            End-to-end data services — from raw extraction to interactive
            dashboards that drive decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)] hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-500">
                  <service.icon className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cyan-400/0 to-transparent group-hover:from-cyan-400/10 rounded-2xl transition-all duration-500" />
            </div>
          ))}

          {/* Let's work together card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 backdrop-blur-sm flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.12)]">
            <h3 className="text-white font-semibold text-xl mb-3">
              Need something custom?
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Every data challenge is unique. Let's discuss your specific needs.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
