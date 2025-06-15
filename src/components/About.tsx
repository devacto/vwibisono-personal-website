
import { Code, Users, Zap, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import './About.css';

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
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About Me
          </h2>
          <p className="about-description">
            I'm a software engineer with 6+ years of experience building scalable web applications 
            and distributed systems. I'm passionate about clean code, system design, and sharing 
            knowledge with the developer community.
          </p>
        </div>

        <div className="about-grid">
          {/* Experience */}
          <div>
            <h3 className="about-section-title">Experience</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4 className="experience-role">{exp.role}</h4>
                    <span className="experience-period">
                      {exp.period}
                    </span>
                  </div>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="about-section-title">Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Card key={index} className="skill-card">
                  <CardContent className="p-6">
                    <div className="skill-header">
                      <skill.icon className="skill-icon" />
                      <h4 className="skill-title">{skill.title}</h4>
                    </div>
                    <div className="skill-items">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="skill-tag"
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
