import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("hero")} className="text-xl font-bold tracking-tight">
          <span className="text-gradient">Max Revenue</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</button>
          <button onClick={() => scrollTo("quote")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Get a Quote</button>
          <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
            <Button size="sm">Book a Call</Button>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <button onClick={() => scrollTo("services")} className="text-sm py-2 text-left">Services</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm py-2 text-left">Pricing</button>
          <button onClick={() => scrollTo("quote")} className="text-sm py-2 text-left">Get a Quote</button>
          <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="w-full">Book a Call</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
