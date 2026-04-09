import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Send } from "lucide-react";

const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business_name: "",
    website: "",
    service_interest: "",
    monthly_revenue: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.business_name || !form.service_interest) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("quote_requests").insert([form]);
    setLoading(false);

    if (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Quote request submitted! We'll be in touch soon.");
      setForm({ name: "", email: "", business_name: "", website: "", service_interest: "", monthly_revenue: "", message: "" });
    }
  };

  return (
    <section id="quote" className="section-padding bg-surface-green">
      <div className="container mx-auto max-w-2xl">
        <Card className="rounded-2xl glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Get a Free Quote</CardTitle>
            <CardDescription className="text-base">
              Tell us about your business and we'll show you how much revenue you're leaving on the table.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl"
                  required
                />
              </div>
              <Input
                placeholder="Business Name *"
                value={form.business_name}
                onChange={(e) => setForm({ ...form, business_name: e.target.value })}
                className="rounded-xl"
                required
              />
              <Input
                placeholder="Website URL"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="rounded-xl"
              />
              <Select value={form.service_interest} onValueChange={(v) => setForm({ ...form, service_interest: v })}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Service You're Interested In *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="failed-payment-recovery">Failed Payment Recovery ($1,500 + 5%)</SelectItem>
                  <SelectItem value="cart-abandonment">Cart Abandonment Recovery ($1,000 + 5%)</SelectItem>
                  <SelectItem value="both">Both Services</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Estimated Monthly Revenue"
                value={form.monthly_revenue}
                onChange={(e) => setForm({ ...form, monthly_revenue: e.target.value })}
                className="rounded-xl"
              />
              <Textarea
                placeholder="Tell us about your business and challenges..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl min-h-[100px]"
              />
              <Button type="submit" size="lg" className="w-full rounded-xl gap-2" disabled={loading}>
                <Send className="h-4 w-4" />
                {loading ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteForm;
