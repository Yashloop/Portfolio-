import { Mail, ArrowDown, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 px-4 sm:px-6 lg:px-8"
    >
      {/* Advanced background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] sm:w-[50rem] h-[30rem] sm:h-[50rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Perfectly centered container */}
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center justify-center text-center mt-[-2rem] sm:mt-0">
        
     

        {/* Main Name Heading */}
        <div className="space-y-3 sm:space-y-4 w-full">
             <div></div>
          <p className="text-blue-400 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
            Yasvanth Bala G
          </h1>
        </div>

        {/* Dynamic Typing Animation */}
        <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center mt-4 sm:mt-6">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Java Developer',
              2000,
              'Mobile App Developer',
              2000,
              'UI/UX Designer',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl sm:text-3xl md:text-4xl font-medium text-slate-400"
            repeat={Infinity}
          />
        </div>

        {/* Concise Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mt-2 sm:mt-4 px-2">
          Crafting robust, scalable applications with modern technologies. Specialized in full-stack engineering, mobile client solutions, and polished user experiences.
        </p>

        {/* Mobile-Optimized CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mt-8 sm:mt-10">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Get In Touch</span>
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-300 border border-slate-700 flex items-center justify-center gap-2"
          >
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
            <span>View My Work</span>
          </a>
        </div>

        {/* Professional Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <a
            href="https://github.com/Yashloop"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 border border-slate-800 hover:border-slate-700"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/yasvanth-bala-g-4a4056299"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 border border-slate-800 hover:border-slate-700"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:yasvanth@example.com"
            className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 border border-slate-800 hover:border-slate-700"
            aria-label="Email Me directly"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

      </div>

      {/* Subtle Scroll Indicator placed elegantly at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ArrowDown className="w-5 h-5 text-slate-600" />
      </div>
    </section>
  );
};

export default Hero;
