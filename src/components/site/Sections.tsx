import mukeshPhoto from "@/assets/MB.png";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Crown,
  Compass,
  Handshake,
  HeartHandshake,
  Landmark,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Wrench,
  Cpu,
  CreditCard,
  Award,
  Network,
  Clock,
  Lock,
  Quote,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  PhoneOutgoingIcon,
} from "lucide-react";
import heroImg from "@/assets/hero-collab.jpg";
import img1 from "@/assets/carousel/team-meeting.jpg";
import img2 from "@/assets/carousel/leader.jpg";
import img3 from "@/assets/carousel/right-person.jpg";
import img4 from "@/assets/carousel/handshake.jpg";

const carouselImages = [
  { src: img1, alt: "Team strategy meeting" },
  { src: img2, alt: "Leader presenting to team" },
  { src: img3, alt: "Right person for the right job" },
  { src: img4, alt: "Recruitment handshake" },
  { src: heroImg, alt: "Recruiters collaborating" },
];
/* ───────── HERO ───────── */

function useCountUp(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          setN(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { n, ref };
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { n, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display text-3xl font-bold text-ocean sm:text-4xl">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="gradient-hero relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="animate-fade-in text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-medium text-teal">
            <Sparkles className="size-3.5" /> Career Connect India
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Where Talent Meets <span className="text-gradient">Opportunity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We help businesses build high-performing teams by identifying, assessing, and connecting them with
            professionals who drive long-term growth and success.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3.5 text-sm font-semibold text-ocean-foreground shadow-lg shadow-ocean/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-teal hover:text-teal"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee">
            {[...carouselImages, ...carouselImages].map((img, i) => (
              <div
                key={i}
                className="relative h-64 w-[420px] shrink-0 overflow-hidden rounded-2xl border border-foreground/10 shadow-lg shadow-ocean/10 sm:h-72 sm:w-[520px]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat value={15} suffix="+" label="Years Experience" />
          <Stat value={1000} suffix="+" label="Placements" />
          <Stat value={250} suffix="+" label="Corporate Clients" />
          <Stat value={20} suffix="+" label="Specializations" />
        </div>
      </div>
    </section>
  );
}

/* ───────── SECTION HEADER ───────── */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

/* ───────── ABOUT ───────── */

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Handshake, label: "Client Partnership" },
  { icon: Award, label: "Industry Expertise" },
  { icon: Sparkles, label: "Talent Excellence" },
  { icon: HeartHandshake, label: "Long-Term Relationships" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="About Us"
          title={
            <>
              Building Careers. <span className="text-gradient">Strengthening Organizations.</span>
            </>
          }
          subtitle="Career Connect India is a talent advisory and executive search firm dedicated to helping organizations identify exceptional professionals across diverse industries."
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Our approach combines industry expertise, market intelligence, extensive professional networks, and a deep
          understanding of organizational culture to deliver recruitment solutions that create lasting impact.
        </p>

        <div className="mt-14">
          <div className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Core Values
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
              >
                <div className="rounded-xl bg-sage/25 p-3 text-ocean transition-colors group-hover:bg-teal group-hover:text-teal-foreground">
                  <Icon className="size-5" />
                </div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── SERVICES ───────── */

const services = [
  { icon: Crown, title: "Executive Search", desc: "Identify and attract senior leadership professionals capable of driving organizational transformation." },
  { icon: Briefcase, title: "Leadership Hiring", desc: "Strategic recruitment for CXOs, Directors, Vice Presidents, and senior management roles." },
  { icon: Users, title: "Permanent Recruitment", desc: "End-to-end hiring solutions for critical business functions." },
  { icon: Compass, title: "Talent Mapping", desc: "Comprehensive market research and talent intelligence to support future workforce planning." },
  { icon: Wrench, title: "Recruitment Process Consulting", desc: "Optimize hiring workflows, candidate experiences, and recruitment efficiency." },
  { icon: LineChart, title: "Career Advisory", desc: "Personalized career guidance, leadership coaching, career transition support, executive mentoring, and strategic professional development advisory for professionals across all career stages." },
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-beige/30 to-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Talent Solutions Designed for Modern Businesses"
          subtitle="A comprehensive suite of recruitment and advisory services tailored to how leaders hire today."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-teal/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex size-11 items-center justify-center rounded-xl bg-ocean/10 text-ocean transition-colors group-hover:bg-ocean group-hover:text-ocean-foreground">
                <Icon className="size-5" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── INDUSTRIES ───────── */

const industries = [
  { icon: Landmark, title: "Banking & Financial Services", desc: "Commercial Banking, Retail Banking, Treasury, Risk, Compliance, Wealth Management." },
  { icon: LineChart, title: "Financial Markets", desc: "Capital Markets, Investment Research, Trading, Asset Management." },
  { icon: CreditCard, title: "FinTech", desc: "Digital Banking, Payments, Financial Technology." },
  { icon: ShieldCheck, title: "Insurance", desc: "Life Insurance, General Insurance, Claims, Underwriting." },
  { icon: Briefcase, title: "Consulting & Professional Services", desc: "Strategy, transformation, and advisory talent across professional services." },
  { icon: Cpu, title: "Technology & Digital", desc: "Engineering, product, data, and digital leadership roles." },
  { icon: Building2, title: "Manufacturing & Industrial", desc: "Operations, supply chain, and industrial leadership talent." },
  { icon: Stethoscope, title: "Healthcare & Life Sciences", desc: "Pharma, medical devices, healthcare delivery, and biotech." },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Industries Covered"
          title="Specialized Recruitment Services"
          subtitle="Deep domain knowledge and trusted professional networks."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-sage hover:shadow-lg"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-sage/30 text-ocean transition-colors group-hover:bg-teal group-hover:text-teal-foreground">
                <Icon className="size-[18px]" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── WHY US ───────── */

const whyUs = [
  { icon: Target, title: "Deep Industry Specialization", desc: "Sector-aligned consultants who understand the nuances of every role." },
  { icon: Network, title: "Extensive Professional Network", desc: "Decades of trusted relationships across senior talent communities." },
  { icon: Search, title: "Rigorous Candidate Assessment", desc: "Multi-stage evaluation focused on capability and cultural fit." },
  { icon: Clock, title: "Faster Hiring Turnaround", desc: "Streamlined search execution without compromising on quality." },
  { icon: Lock, title: "Confidential Search Capabilities", desc: "Discreet executive search for sensitive leadership mandates." },
  { icon: HeartHandshake, title: "Relationship-Driven Approach", desc: "We build partnerships, not transactions — for the long term." },
];

export function WhyUs() {
  return (
    <section className="gradient-ocean relative overflow-hidden py-24 text-ocean-foreground lg:py-32">
      <div className="absolute inset-0 -z-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Why Choose Us</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]">
            The Right Talent. The Right Fit. <span className="text-sage">The Right Time.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-sage/25 text-sage">
                <Icon className="size-[18px]" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ocean-foreground/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── PROCESS ───────── */

const steps = [
  { n: "01", title: "Discovery & Consultation", desc: "Understand your business, culture and hiring objectives." },
  { n: "02", title: "Requirement Analysis", desc: "Define the ideal candidate profile and success metrics." },
  { n: "03", title: "Talent Mapping", desc: "Map relevant talent pools and shortlist target candidates." },
  { n: "04", title: "Candidate Evaluation", desc: "Rigorous assessment of capability, motivation and fit." },
  { n: "05", title: "Client Interviews", desc: "Curated shortlist and structured interview support." },
  { n: "06", title: "Offer & Onboarding Support", desc: "Negotiation, closure and seamless onboarding partnership." },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="A Proven Six-Step Recruitment Journey"
          subtitle="Methodical, transparent and built around your business outcomes."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-teal/30 bg-card font-display text-base font-bold text-ocean shadow-md">
                  {s.n}
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-display text-sm font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-5 hidden size-4 text-teal/60 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── EMPLOYERS / CANDIDATES ───────── */

function PersonaCard({
  id,
  eyebrow,
  title,
  intro,
  bullets,
  cta,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  bullets: string[];
  cta: string;
  tone: "ocean" | "teal";
}) {
  const toneBg = tone === "ocean" ? "from-ocean/8 to-teal/5" : "from-sage/25 to-beige/30";
  const btn = tone === "ocean" ? "bg-ocean text-ocean-foreground" : "bg-teal text-teal-foreground";
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${toneBg} p-8 sm:p-10`}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</div>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      <ul className="mt-6 space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-7 inline-flex items-center gap-2 rounded-full ${btn} px-5 py-3 text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg`}
      >
        {cta} <ArrowRight className="size-4" />
      </a>
    </div>
  );
}

export function EmployersCandidates() {
  return (
    <section className="bg-gradient-to-b from-background to-beige/20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
        <PersonaCard
          id="employers"
          eyebrow="For Employers"
          title="Hire leaders who move your business forward."
          intro="We partner with organizations to deliver leadership and specialist talent — with speed, rigor and confidentiality."
          bullets={[
            "Access to qualified professionals",
            "Reduced hiring timelines",
            "Market intelligence and benchmarking",
            "Leadership hiring expertise",
            "Confidential executive search",
          ]}
          cta="Partner With Us"
          tone="ocean"
        />
        <PersonaCard
          id="candidates"
          eyebrow="For Candidates"
          title="Build the next chapter of your career through us."
          intro="We help professionals connect with meaningful career opportunities through paid advisory services."
          bullets={[
            "Personalised 1 on 1 Career Advisory",
            "Job search guidance",
            "Industry insights and market intelligence",
            "Confidential profile handling",
          ]}
          cta="Submit Your Profile"
          tone="teal"
        />
      </div>
    </section>
  );
}

/* ───────── TESTIMONIALS ───────── */

const testimonials = [
  {
    quote:
      "Their understanding of our culture and the leadership bar we operate at was remarkable. The shortlist was tight, relevant and high-calibre.",
    role: "HR Director, Financial Services",
  },
  {
    quote:
      "We engaged them for a confidential CXO mandate. Discreet, methodical and consistently transparent — exactly what a critical search demands.",
    role: "CEO, FinTech",
  },
  {
    quote:
      "The market intelligence they bring goes well beyond a CV pipeline. They've helped us shape our workforce strategy.",
    role: "Business Head, Manufacturing",
  },
  {
    quote:
      "Turnaround was significantly faster than our previous partners, and the quality of candidates was noticeably higher.",
    role: "Hiring Manager, Technology",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Trusted by Leaders Who Build Great Teams" />

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
          <Quote className="absolute -right-2 -top-2 size-24 text-teal/10" />
          <p className="relative font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            “{t.quote}”
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-ocean">{t.role}</div>
              <div className="text-xs text-muted-foreground">Verified client</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-ocean" : "w-1.5 bg-foreground/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-beige/30 to-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Book a One-on-One <span className="text-gradient">Consultation</span>
            </>
          }
          subtitle="Executive search, leadership hiring, career advisory and professional development — guided personally by Mukesh Bhasin."
        />

        {/* Profile Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-ocean/8 via-card to-teal/5 p-8 shadow-xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <img
  src={mukeshPhoto}
  alt="Mukesh Bhasin"
  className="size-32 rounded-full object-cover border-4 border-ocean shadow-2xl ring-4 ring-ocean/20"
/>
              <a
                href="https://www.linkedin.com/in/mukeshbhasin?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-teal hover:text-teal"
              >
                <Linkedin className="size-3.5" /> LinkedIn Profile
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Founder</div>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Mukesh Bhasin
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Civil Engineer (VJTI) and MMS Finance (JBIMS) with 25+ years across Corporate Banking, 
                Investment Banking, Structured Finance, Infrastructure Finance and Equipment Finance — at 
                various MNC as well as Domestic BFSI organisations.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { v: "27+", l: "Years Experience" },
                  { v: "550+", l: "Search Mandates" },
                  { v: "BFSI", l: "Corporate & Investment Banking Experience" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card/70 p-4 text-center">
                    <div className="font-display text-2xl font-bold text-ocean">{s.v}</div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Entrepreneurial & Executive Search</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" /> Launched and managed multiple businesses</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" /> 400+ executive search mandates delivered</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" /> Deep professional & industry networks</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Education</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" /> Bachelor of Civil Engineering — VJTI, Mumbai (1995)</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" /> MBA — JBIMS, Mumbai (1999)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-8 text-center shadow-lg sm:p-12">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Looking for career guidance, leadership mentoring, executive search support, or hiring advisory? Schedule a
            one-on-one consultation with Mukesh Bhasin.
          </p>
          <a
            href="https://topmate.io/mukeshbhasin"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ocean px-7 py-4 text-sm font-semibold text-ocean-foreground shadow-lg shadow-ocean/20 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl sm:text-base"
          >
            Book a Consultation with Mukesh Bhasin
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
            <div className="flex size-11 items-center justify-center rounded-xl bg-ocean/10 text-ocean transition-colors group-hover:bg-ocean group-hover:text-ocean-foreground">
              <MapPin className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-foreground">Office Address</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              T2 4001, Crescent Bay<br />
              Jerbai Wadia Road, Parel<br />
              Mumbai, Maharashtra 400012<br />
              India
            </p>
           {/*
            <a
              href="https://www.google.com/maps/search/?api=1&query=Crescent+Bay+Parel+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal transition-colors hover:text-ocean"
            >
              View on Maps <ArrowRight className="size-3.5" />
            </a>
           */}
          </div>

         {/*<div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
            <div className="flex size-11 items-center justify-center rounded-xl bg-ocean/10 text-ocean transition-colors group-hover:bg-ocean group-hover:text-ocean-foreground">
              <Phone className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-foreground">Mobile</h4>
            <a
              href="tel:+919819855065"
              className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-teal"
            >
              +91 98198 55065
            </a>
          </div> */}

          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
            <div className="flex size-11 items-center justify-center rounded-xl bg-ocean/10 text-ocean transition-colors group-hover:bg-ocean group-hover:text-ocean-foreground">
              <Mail className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-foreground">Mukesh Bhasin</h4>
            <a
              href="mailto:mukesh@careerconnectindia.com"
              className="mt-2 block break-all text-sm text-muted-foreground transition-colors hover:text-teal"
            >
              mukesh@careerconnectindia.com
            </a>
          </div>
          <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
            <div className="flex size-11 items-center justify-center rounded-xl bg-ocean/10 text-ocean transition-colors group-hover:bg-ocean group-hover:text-ocean-foreground">
             <Mail className="size-5" />
            </div>
           <h4 className="mt-4 font-display text-base font-semibold text-foreground">Monika Bhasin</h4>
            <a
             href="mailto:monika@career-connect.in"
             className="mt-2 block break-all text-sm text-muted-foreground transition-colors hover:text-teal"
            >
             monika@career-connect.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── FOOTER ───────── */

export function Footer() {
  return (
    <footer className="gradient-ocean relative overflow-hidden text-ocean-foreground">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-beige/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-bold">Career Connect India</div>
            <p className="mt-3 max-w-sm text-sm text-ocean-foreground/75">
              Where Talent Meets Opportunity. A talent advisory and executive search firm building careers and
              strengthening organizations across India.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/mukeshbhasin?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/20 bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="mailto:mukesh@careerconnectindia.com"
                aria-label="Email"
                className="rounded-full border border-white/20 bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Employers", "#employers"],
              ["Candidates", "#candidates"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              ["Executive Search", "#services"],
              ["Leadership Hiring", "#services"],
              ["Permanent Recruitment", "#services"],
            ["Talent Mapping", "#services"],
            ["Career Advisory", "#services"],
            ]}
          />
          <FooterCol
            title="Industries"
            items={[
              ["Banking & FS", "#industries"],
              ["Financial Markets", "#industries"],
              ["FinTech", "#industries"],
              ["Insurance", "#industries"],
              ["Technology", "#industries"],
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-ocean-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Career Connect India. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-sage">Privacy Policy</a>
            <a href="#" className="hover:text-sage">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-sage">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm text-ocean-foreground/75">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="transition-colors hover:text-ocean-foreground">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* unused exports to keep tree-shaking honest */
export const _icons = { Phone };