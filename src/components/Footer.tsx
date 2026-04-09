const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-xl font-bold text-gradient">Max Revenue</div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Max Revenue. All rights reserved.
      </p>
      <a
        href="https://calendar.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-primary hover:underline"
      >
        Book a Call →
      </a>
    </div>
  </footer>
);

export default Footer;
