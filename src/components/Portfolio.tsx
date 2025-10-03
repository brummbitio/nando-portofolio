import projectThrift from "@/assets/project-thrift.png";
import projectTape from "@/assets/project-tape.png";
import projectBooks from "@/assets/project-books.png";
import projectMobile from "@/assets/project-mobile.png";

export const Portfolio = () => {
  const projects = [
    {
      title: "Thrift Shop App",
      category: "UI/UX Design, Mobile App",
      year: "2025",
      image: projectThrift,
    },
    {
      title: "Tape Branding",
      category: "Logo, branding & animation",
      year: "2024",
      image: projectTape,
    },
    {
      title: "Book Series Design",
      category: "Editorial Design, Branding",
      year: "2024",
      image: projectBooks,
    },
    {
      title: "Discovery App",
      category: "Mobile UI/UX, Prototype",
      year: "2023",
      image: projectMobile,
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
              Bringing Ideas to Life
              <br />
              through Design
            </h2>
            <p className="text-muted-foreground max-w-md">
              A collection of projects reflecting my process and problem-solving approach.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex items-end justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.category}</p>
                  </div>
                  <div className="text-3xl font-bold opacity-80">{project.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
