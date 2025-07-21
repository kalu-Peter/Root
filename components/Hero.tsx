
'use client';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20software%20developer%20workspace%20with%20modern%20computer%20setup%2C%20clean%20desk%20environment%2C%20coding%20on%20multiple%20monitors%2C%20contemporary%20office%20space%20with%20natural%20lighting%2C%20technology%20and%20programming%20atmosphere%2C%20minimalist%20design%20aesthetic&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-white">Peter Kalu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Full-Stack Developer specializing in comprehensive digital solutions across 
            healthcare, education, and business management systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#projects"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap font-semibold text-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap font-semibold text-lg"
            >
              Get In Touch
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Multiple</h3>
              <p className="text-gray-300">Industries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">6+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}