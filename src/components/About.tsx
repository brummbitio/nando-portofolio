import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import profileLight from "@/assets/profile-light.png";
import profileDark from "@/assets/profile-dark.png";
import { Button } from "./ui/button";

export const About = () => {
  const { theme } = useTheme();
  const profileImage = theme === "light" ? profileLight : profileDark;

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-card rounded-3xl shadow-xl border border-border/40 overflow-hidden transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Image */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <img
                src={profileImage}
                alt="Zacky Ramadhan - About"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Right - Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                About Me
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Designing with Purpose,
                <br />
                Building with Passion
              </h2>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                As a Digital Product Designer, I create experiences that are both functional and meaningful, blending design with development to keep things clear and engaging.
              </p>
              
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 w-fit group transition-all duration-300">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 lg:p-16 pt-8 border-t border-border/40">
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-6xl font-bold text-stats mb-2">10+</div>
              <div className="text-sm text-stats-label">Years Experience</div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-6xl font-bold text-stats mb-2">109+</div>
              <div className="text-sm text-stats-label">Project Completed</div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-6xl font-bold text-stats mb-2">20/7</div>
              <div className="text-sm text-stats-label">Support Available</div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-6xl font-bold text-stats mb-2">96%</div>
              <div className="text-sm text-stats-label">Clients Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
