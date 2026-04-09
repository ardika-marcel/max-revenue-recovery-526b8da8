import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-sm font-medium text-primary mb-8">
          <TrendingUp className="h-4 w-4" />
          Revenue Recovery & Cart Abandonment Solutions
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Stop Losing Revenue.
          <br />
          <span className="text-gradient">Start Recovering It.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Max Revenue helps subscription and e-commerce businesses recover failed payments and abandoned carts with AI-powered automation — so you keep the revenue you've already earned.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base px-8 py-6 rounded-xl font-semibold gap-2">
              Book a Free Strategy Call <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl font-semibold" onClick={() => scrollTo("services")}>
            See How It Works
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "30%+", label: "Revenue Recovered" },
            { value: "AI", label: "Powered Messages" },
            { value: "24/7", label: "Automated System" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
