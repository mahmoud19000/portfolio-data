import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <footer id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Something
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto">
            Have a data challenge? I'm available for freelance projects and
            full-time opportunities.
          </p>
        </div>

        {/* Email CTA */}
        <div className="flex justify-center mb-12">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.03]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {contact.email}
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:-translate-y-0.5"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mahmoud Fayez. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Data Engineer &amp; Data Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
