
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hello, I'm <span className="text-teal">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A passionate web developer crafting beautiful and functional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button onClick={handleScrollToContact} className="bg-teal hover:bg-teal-light text-white px-6 py-3 rounded-md transition-colors">
                Contact Me
              </button>
              <a href="/resume.pdf" download className="border border-teal text-teal hover:bg-teal hover:text-white px-6 py-3 rounded-md transition-colors">
                Download CV
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal to-teal-light/40 flex items-center justify-center">
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-white flex items-center justify-center">
                {/* Replace with your actual image */}
                <div className="text-6xl font-bold text-teal">YN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
