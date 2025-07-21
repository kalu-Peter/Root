
'use client';

const projects = [
  {
    id: 1,
    title: "School Management System",
    description: "Comprehensive school management platform with student enrollment, grade tracking, attendance management, and parent-teacher communication features built with modern web technologies.",
    image: "https://readdy.ai/api/search-image?query=Modern%20school%20management%20system%20dashboard%20interface%20showing%20student%20records%2C%20class%20schedules%2C%20grade%20management%2C%20clean%20educational%20software%20design%20with%20organized%20layout%20and%20professional%20appearance&width=600&height=400&seq=project-1&orientation=landscape",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "Complete healthcare management solution with patient records, appointment scheduling, inventory management, and staff coordination features for efficient hospital operations.",
    image: "https://readdy.ai/api/search-image?query=Professional%20hospital%20management%20system%20interface%20with%20patient%20records%2C%20appointment%20scheduling%2C%20medical%20dashboard%2C%20healthcare%20software%20design%20with%20clean%20medical%20theme%20and%20organized%20information%20display&width=600&height=400&seq=project-2&orientation=landscape",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js", "React"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Procurement Management System",
    description: "Advanced procurement platform with vendor management, purchase order processing, inventory tracking, and approval workflows for streamlined business operations.",
    image: "https://readdy.ai/api/search-image?query=Business%20procurement%20system%20dashboard%20showing%20vendor%20management%2C%20purchase%20orders%2C%20inventory%20tracking%2C%20professional%20business%20software%20interface%20with%20charts%20and%20organized%20data%20presentation&width=600&height=400&seq=project-3&orientation=landscape",
    technologies: ["React", "PHP", "PostgreSQL", "JavaScript", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Full-featured online store with product catalog, shopping cart, payment processing, order management, and customer dashboard for complete e-commerce experience.",
    image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20payment%20integration%2C%20online%20store%20design%20with%20clean%20layout%20and%20professional%20e-commerce%20elements&width=600&height=400&seq=project-4&orientation=landscape",
    technologies: ["Next.js", "Node.js", "MongoDB", "TypeScript", "AWS"],
    liveUrl: "https://kalu-peter.github.io/Ecom/",
    githubUrl: "https://github.com/kalu-Peter/Ecom"
  },
  {
    id: 5,
    title: "Clinic Management System",
    description: "Efficient clinic management solution with patient appointments, medical records, prescription management, and billing system for small to medium healthcare facilities.",
    image: "https://readdy.ai/api/search-image?query=Clean%20clinic%20management%20software%20interface%20with%20appointment%20scheduling%2C%20patient%20records%2C%20medical%20forms%2C%20small%20healthcare%20facility%20dashboard%20with%20organized%20medical%20information%20display&width=600&height=400&seq=project-5&orientation=landscape",
    technologies: ["React", "Node.js", "PostgreSQL", "JavaScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Farm Management Website",
    description: "Agricultural management platform with crop tracking, livestock management, weather integration, and farm analytics for modern farming operations and productivity optimization.",
    image: "https://readdy.ai/api/search-image?query=Agricultural%20farm%20management%20website%20with%20crop%20tracking%20dashboard%2C%20livestock%20records%2C%20weather%20data%2C%20farming%20technology%20interface%20with%20green%20agricultural%20theme%20and%20organized%20farm%20data%20presentation&width=600&height=400&seq=project-6&orientation=landscape",
    technologies: ["React", "MongoDB", "Node.js", "JavaScript", "Git"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my diverse project portfolio spanning healthcare, education, agriculture, 
            and e-commerce sectors, demonstrating expertise across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-external-link-line"></i>
                    </div>
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-github-line"></i>
                    </div>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}