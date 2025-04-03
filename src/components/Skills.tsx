
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Layers 
} from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-teal" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      title: "Frontend Development",
      icon: <Layers className="h-8 w-8 text-teal" />,
      skills: ["HTML", "CSS", "React", "Vue.js", "Angular"]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8 text-teal" />,
      skills: ["Node.js", "Express", "Django", "Spring Boot", "SQL"]
    },
    {
      title: "Other Technologies",
      icon: <Globe className="h-8 w-8 text-teal" />,
      skills: ["Git", "Docker", "AWS", "Firebase", "GraphQL"]
    }
  ];

  const SkillItem: React.FC<{ name: string }> = ({ name }) => {
    return (
      <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 hover:bg-teal hover:text-white transition-colors duration-200 flex items-center justify-center">
        {name}
      </div>
    );
  };
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-teal">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-semibold ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <SkillItem key={idx} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
