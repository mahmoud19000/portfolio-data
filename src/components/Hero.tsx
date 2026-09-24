import { ArrowRight, Mail } from "lucide-react";
import { profileImage } from "@/data/portfolio";

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide">
              Available for freelance & full-time
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] animate-[fadeInUp_0.7s_ease-out]">
            Mahmoud
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Fayez
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-300 animate-[fadeInUp_0.8s_ease-out]">
            Data Engineer &amp; Data Specialist
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-[fadeInUp_0.9s_ease-out]">
            I build scalable ETL pipelines, automated web scrapers, and
            interactive analytics dashboards.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[fadeInUp_1s_ease-out]">
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </button>
          </div>
        </div>

        {/* Profile image */}
        <div className="order-1 lg:order-2 flex justify-center relative animate-[fadeIn_1.2s_ease-out]">
          <div className="relative">
            {/* Radial glowing backdrop */}
            <div className="absolute inset-0 -m-16 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl" />
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-tr from-cyan-400/10 to-blue-500/10 blur-2xl" />

            {/* Image container */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={profileImage}
                alt="Mahmoud Fayez"
                className="w-full h-full object-cover"
              />
              {/* Bottom masking fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/80 to-transparent" />
            </div>

            {/* Floating accent badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-cyan-300 shadow-lg">
              ETL Pipelines
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-blue-300 shadow-lg">
              Data Analytics
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
