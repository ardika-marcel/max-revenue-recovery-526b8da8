import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Failed Payment Recovery",
    setup: "$1,500",
    rev: "5%",
    features: [
      "Failed Payment Detection Engine",
      "Smart Retry Timing (AI)",
      "AI Recovery Message Generator",
      "Revenue Recovery Dashboard",
      "Cancellation Insights Popup",
      "Card Expiry Reminder System",
    ],
    popular: true,
  },
  {
    name: "Cart Abandonment Recovery",
    setup: "$1,000",
    rev: "5%",
    features: [
      "Automated Email Sequences",
      "Cart Abandonment Detection",
      "Cancellation Insights Popup",
      "Churn Analytics Dashboard",
      "E-commerce Optimized",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, Performance-Based Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One-time setup fee + a small share of the revenue we recover. We only win when you win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`rounded-2xl relative overflow-hidden ${plan.popular ? "border-primary shadow-xl shadow-primary/10" : ""}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-xl">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  <span className="text-3xl font-bold text-foreground">{plan.setup}</span>{" "}
                  <span className="text-muted-foreground">setup + {plan.rev} recovered revenue</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-xl" size="lg">Book a Call</Button>
                  </a>
                  <Button variant="outline" className="w-full rounded-xl" size="lg" onClick={() => scrollTo("quote")}>
                    Get a Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
