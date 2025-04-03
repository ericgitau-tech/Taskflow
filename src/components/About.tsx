
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-teal">Me</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Hello! I'm a passionate developer with a deep interest in creating elegant solutions to complex problems. I believe that well-crafted technology has the power to transform businesses and enhance lives.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              My journey in technology began when I first discovered the joy of bringing ideas to life through code. Since then, I've been on a continuous learning path, staying up-to-date with the latest technologies and best practices.
            </p>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-teal">My Interests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-medium mb-2">Web Development</h4>
                  <p className="text-gray-600">I'm passionate about crafting responsive, performant web applications using modern technologies.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-medium mb-2">User Experience</h4>
                  <p className="text-gray-600">I believe in creating intuitive interfaces that make technology accessible to everyone.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-medium mb-2">Problem Solving</h4>
                  <p className="text-gray-600">I enjoy tackling complex challenges and finding efficient, elegant solutions.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-medium mb-2">Continuous Learning</h4>
                  <p className="text-gray-600">Technology is constantly evolving, and I'm committed to growing alongside it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
