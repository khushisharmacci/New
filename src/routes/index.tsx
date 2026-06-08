import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero,
  About,
  Services,
  Industries,
  WhyUs,
  Process,
  EmployersCandidates,
  Testimonials,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Career Connect India — Executive Search, Leadership Hiring & Career Advisory" },
      {
        name: "description",
        content:
          "Executive search, leadership hiring, talent acquisition, recruitment consulting and career advisory by Mukesh Bhasin. Book a 1:1 consultation for executive mentoring, career coaching and professional development.",
      },
      { property: "og:title", content: "Career Connect India — Executive Search & Career Advisory" },
      {
        property: "og:description",
        content:
          "Leadership hiring, executive search, talent acquisition, recruitment consulting, career advisory and executive mentoring across Banking, FinTech, Technology and more.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <EmployersCandidates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
