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
      { title: "Career Connect India — Where Talent Meets Opportunity" },
      {
        name: "description",
        content:
          "Career Connect India is a talent advisory and executive search firm helping organizations hire exceptional leadership and specialist talent across industries.",
      },
      { property: "og:title", content: "Career Connect India — Executive Search & Talent Advisory" },
      {
        property: "og:description",
        content:
          "Leadership hiring, executive search, talent mapping, and workforce advisory across Banking, FinTech, Technology, Healthcare and more.",
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
