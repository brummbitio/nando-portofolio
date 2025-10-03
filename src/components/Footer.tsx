import { Dribbble, Twitter, Instagram, Palette } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-footer text-footer-foreground overflow-hidden">
      {/* Large Name Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="text-[20vw] font-extrabold tracking-tighter leading-none select-none"
          style={{
            color: `hsl(var(--name-overlay) / ${
              document.documentElement.classList.contains("dark") ? "0.05" : "0.03"
            })`,
          }}
        >
          ZACKY
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's talk</h3>
            <a
              href="mailto:hello@zackyramadhan.com"
              className="text-lg hover:text-primary transition-colors"
            >
              hello@zackyramadhan.com
            </a>
            
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                aria-label="Dribbble"
              >
                <Dribbble className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                aria-label="Behance"
              >
                <Palette className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-sm hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-sm hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#experience" className="block text-sm hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#portfolio" className="block text-sm hover:text-primary transition-colors">
                Portfolio
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                UI/UX Design
              </a>
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                Web Design
              </a>
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                Graphic Design
              </a>
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                Design System
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                Support Center
              </a>
              <a href="#" className="block text-sm hover:text-primary transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Zacky Ramadhan, All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms Of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
