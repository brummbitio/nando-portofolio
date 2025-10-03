export const Experience = () => {
  const experiences = [
    {
      year: "2022-2025",
      title: "Senior UI/UX Designer",
      company: "Odama Studio",
      description: null,
    },
    {
      year: "2021-2022",
      title: "Product Designer",
      company: "Vektora Studio",
      description:
        "I created and refined design solutions for digital and visual projects, ensuring clarity and consistency while working with teams. I also developed prototypes to test ideas and improve the overall experience.",
    },
    {
      year: "2020-2021",
      title: "Graphic Designer",
      company: "Keitoto Studio",
      description: null,
    },
    {
      year: "2019-2021",
      title: "Web Developer",
      company: "Potara Studio",
      description: null,
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Experience
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
              Exploring My Growth
              <br />
              as a Designer
            </h2>
            <p className="text-muted-foreground max-w-md">
              Every role and project has shaped my skills and passion for design.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group border-b border-border/40 py-8 hover:bg-card/50 transition-all duration-300 rounded-xl px-6 -mx-6"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {exp.year}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  {exp.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-5 text-left lg:text-right">
                  <h4 className="text-2xl font-bold">{exp.company}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
