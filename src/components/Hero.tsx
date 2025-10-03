import { ArrowRight, Dribbble, Twitter, Instagram, Palette } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import profileLight from "@/assets/profile-light.png";
import profileDark from "@/assets/profile-dark.png";
import { Button } from "./ui/button";

export const Hero = () => {
  const { theme } = useTheme();
  const profileImage = theme === "light" ? profileLight : profileDark;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight">
                I'M
                <br />
                <span className="inline-block mt-2">ZACKY</span>
              </h1>
              
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold group transition-all duration-300">
                Let's Discuss
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                Hello, I'm Zacky Ramadhan, a Digital Product Designer passionate about creating meaningful digital experiences.
              </p>
            </div>
          </div>

          {/* Right Content - Profile & Title */}
          <div className="relative animate-slide-in-right">
            {/* Profile Image */}
            <div className="relative z-10 mb-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Zacky Ramadhan - Professional Portrait"
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Dribbble"
                >
                  <Dribbble className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Behance"
                >
                  <Palette className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                I design intuitive interface and develop user-centric
              </p>
            </div>

            {/* Large Title */}
            <div className="text-right">
              <h2 className="text-6xl lg:text-8xl font-extrabold tracking-tighter leading-none">
                DIGITAL
                <br />
                PRODUCT
                <br />
                DESIGNER
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
