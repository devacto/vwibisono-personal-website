
import { Code, Users, Zap, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const experiences = [
    {
      company: "Tech Company",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading backend development for high-scale distributed systems serving millions of users."
    },
    {
      company: "Startup Inc",
      role: "Full Stack Engineer",
      period: "2020 - 2022",
      description: "Built the entire platform from scratch, including API design, database architecture, and frontend."
    },
    {
      company: "Enterprise Corp",
      role: "Software Engineer",
      period: "2018 - 2020",
      description: "Developed microservices and improved system performance by 40% through optimization."
    }
  ];

  const skills = [
    { icon: Code, title: "Languages", items: ["TypeScript", "Python", "Go", "Java"] },
    { icon: Zap, title: "Technologies", items: ["React", "Node.js", "PostgreSQL", "Docker"] },
    { icon: Users, title: "Practices", items: ["System Design", "Code Reviews", "Mentoring", "Agile"] },
    { icon: BookOpen, title: "Domains", items: ["Distributed Systems", "APIs", "DevOps", "Performance"] }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a software engineer with 6+ years of experience building scalable web applications 
            and distributed systems. I'm passionate about clean code, system design, and sharing 
            knowledge with the developer community.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <skill.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
