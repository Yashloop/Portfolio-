import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Infosys Springboard',
      position: 'Internship',
      duration: 'Recent',
      location: 'Remote',
      description: 'Learning and development program focused on modern technologies and industry best practices. Working on real-world projects and gaining hands-on experience with enterprise technologies.',
      skills: ['Full Stack Development', 'Cloud Computing', 'Software Engineering', 'Agile Methodology'],
      logo: '/public/infosys.png'
    },
    {
      company: 'Marcello Tech',
      position: 'Mobile App Development Intern',
      duration: 'May 2024 - July 2024',
      location: 'Chennai, India',
      description: 'Worked on mobile application development using Flutter and Android. Developed UI components and implemented backend functionality. Collaborated with a team of developers to deliver high-quality applications.',
      skills: ['Flutter', 'Android Studio', 'Mobile UI/UX', 'Firebase', 'API Integration'],
      logo: '/public/marcho.png'
    },
    {
      company: 'IZEON Innovative Pvt Ltd',
      position: 'Web Development Intern',
      duration: 'January 2024 - March 2024',
      location: 'Remote',
      description: 'Contributed to the development of web applications using modern JavaScript frameworks. Implemented responsive design patterns and optimized application performance.',
      skills: ['JavaScript', 'HTML/CSS', 'API Integration', 'Web Development', 'Git'],
      logo: '/public/izeon.jpeg'
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey through internships and professional roles
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 group-hover:border-blue-500/50 transition-all duration-300">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-14 h-14 md:w-18 md:h-18 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%231e293b"/><text y="50%" x="50%" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-size="32" font-weight="bold">' + exp.company.charAt(0) + '</text></svg>';
                      }}
                    />
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-blue-400 font-semibold flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
