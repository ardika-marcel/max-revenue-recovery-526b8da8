import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CreditCard, ShoppingCart, Brain, BarChart3, Mail, Bell, PieChart, Shield } from "lucide-react";

const services = [
  {
    title: "Failed Payment Detection Engine",
    icon: CreditCard,
    items: [
      { icon: Brain, name: "Smart Retry Timing", desc: "AI determines the optimal time to retry failed charges" },
      { icon: Mail, name: "AI Recovery Messages", desc: "LLM-generated emails based on failure reason — expired card, insufficient funds, etc." },
      { icon: BarChart3, name: "Revenue Recovery Dashboard", desc: "Visual insights into recovered revenue, trends, and performance" },
      { icon: PieChart, name: "Cancellation Insights Popup", desc: "Understand churn reasons with pie charts and analytics" },
      { icon: Bell, name: "Card Expiry Reminders", desc: "Automatically notify customers before their card expires" },
    ],
  },
  {
    title: "Cart Abandonment Recovery",
    icon: ShoppingCart,
    items: [
      { icon: Mail, name: "Automated Email Sequences", desc: "Smart email marketing triggered by cart abandonment events" },
      { icon: PieChart, name: "Cancellation Insights", desc: "Churn analysis with pie charts and detailed statistics" },
      { icon: Shield, name: "E-commerce Optimized", desc: "Built specifically for online stores to maximize conversions" },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-surface-green">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Productised Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Two battle-tested systems designed to plug revenue leaks and recover lost sales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="glass-card rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base">
                {service.title.includes("Payment") ? "Recover failed subscription payments with AI" : "Win back abandoned carts with automated email marketing"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item.name} className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
