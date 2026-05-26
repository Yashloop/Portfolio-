import { FaJava, FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaAndroid, FaDatabase, FaPaintBrush, FaCode, FaAws, FaFireAlt } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      icon: <FaJava className="w-10 h-10" />,
      description: 'Object-oriented programming & enterprise applications',
    },
    {
      name: 'React.js',
      icon: <FaReact className="w-10 h-10" />,
      description: 'Modern, responsive web applications',
    },
    {
      name: 'Node.js',
      icon: <FaNode className="w-10 h-10" />,
      description: 'Server-side JavaScript & API development',
    },
    {
      name: 'Spring Boot',
      icon: <SiSpringboot className="w-10 h-10" />,
      description: 'Robust Java backend applications',
    },
    {
      name: 'Firebase',
      icon: <FaFireAlt className="w-10 h-10" />,
      description: 'Real-time database & cloud services',
    },
    {
      name: 'AWS',
      icon: <FaAws className="w-10 h-10" />,
      description: 'Cloud computing & deployment',
    },
    {
      name: 'UI/UX Design',
      icon: <FaPaintBrush className="w-10 h-10" />,
      description: 'Beautiful, intuitive interfaces',
    },
    {
      name: 'C Programming',
      icon: <FaCode className="w-10 h-10" />,
      description: 'Low-level programming fundamentals',
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="w-10 h-10" />,
      description: 'Semantic markup & web standards',
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="w-10 h-10" />,
      description: 'Advanced styling & responsive design',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="w-10 h-10" />,
      description: 'Modern ES6+ development',
    },
    {
      name: 'Android Studio',
      icon: <FaAndroid className="w-10 h-10" />,
      description: 'Native Android app development',
    },
    {
      name: 'SQL',
      icon: <FaDatabase className="w-10 h-10" />,
      description: 'Database design & optimization',
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Expertise across modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                
                <p className="text-slate-400 text-sm leading-snug">
                  {skill.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
