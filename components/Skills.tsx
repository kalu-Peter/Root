
'use client';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    title: "Backend Development",
    icon: "ri-server-line",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PHP", level: 82 },
      { name: "REST APIs", level: 93 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "ri-tools-line",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 78 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 98 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical expertise spans across modern web development technologies, 
            from frontend frameworks to backend systems and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Experience</h3>
            <p className="text-gray-600 mb-6">
              With 20+ completed projects across healthcare, education, agriculture, and e-commerce sectors, 
              I bring real-world experience to every development challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Healthcare Systems", "Educational Platforms", "E-Commerce Solutions", "Agricultural Tech", "Business Management"].map((sector) => (
                <span key={sector} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}