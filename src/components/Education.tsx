
import React, { useEffect, useRef } from 'react';
import { BookOpen, Download } from 'lucide-react';

const Education: React.FC = () => {
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
  
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Example University",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning. Thesis focused on applications of neural networks in natural language processing."
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Sample Institute of Technology",
      year: "2016-2020",
      description: "Graduated with honors. Participated in multiple hackathons and coding competitions. Completed capstone project on IoT applications."
    }
  ];
  
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-teal">Education</span> & Background
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {education.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <span className="text-teal font-medium">{item.year}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{item.institution}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center bg-teal hover:bg-teal-light text-white px-6 py-3 rounded-md transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Complete CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
