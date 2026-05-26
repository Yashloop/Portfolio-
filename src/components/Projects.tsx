import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
  title: 'SurveySnap',
  type: 'AI-Powered Survey Analytics Platform',
  description: 'Developed an AI-driven survey analytics platform that transforms raw survey responses into actionable insights using sentiment analysis, theme clustering, churn-risk detection.',
  tech: ['Java', 'Spring Boot', 'React', 'AI/ML', 'NLP', 'Data Analytics', 'Chart.js'],
  github: 'https://github.com/Yashloop/SURVEYSNAPS',
},
{
  title: 'Clinic Web Platform',
  type: 'Healthcare Web Application',
  description: 'Built a modern clinic management and healthcare web platform for patient interaction, appointment handling, and clinic information management. Focused on responsive UI/UX, fast performance.',
  tech: ['React', 'JavaScript', 'Node.js', 'Firebase', 'HTML', 'CSS'],
  github: 'https://github.com/Yashloop/Elakkiya-Clinic',
},
    {
      title: 'AI VoiceVersion App',
      type: 'Mobile Application',
      description: 'An offline AI-based app that helps visually impaired users identify Indian medicines using voice assistance and image detection.',
      tech: ['AI/ML', 'Android', 'Image Recognition', 'Voice Assistant'],
      github: 'https://github.com/Yashloop/Medical-Assistance-App-Voice-vision',
    },
    {
      title: 'Alumni Connect App',
      type: 'Cloud Application',
      description: 'A cloud-based platform using Firebase to connect alumni and students, featuring chat and event sharing functionalities.',
      tech: ['Firebase', 'Android', 'Real-time Chat', 'Cloud Storage'],
      github: 'https://github.com/Yashloop/Alumini_connect',
    },
    {
      title: 'Threat Detection Algorithm',
      type: 'IoT + Website',
      description: 'A real-time detection system using TensorFlow, ESP32-CAM, and SMTP server to alert authorities about crowd threats.',
      tech: ['TensorFlow', 'ESP32', 'IoT', 'Python'],
      github: 'https://github.com/Yashloop/Threat-detection',
    },
    {
      title: 'MediPlus – Pharmacy Website',
      type: 'Website',
      description: 'An elegant and responsive website for a pharmacy, showcasing product catalogs and medicine categories.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      github: 'https://github.com/Yashloop/Mediplus-Pharmacy-Website-',
    },
    {
  title: 'Food Booking System',
  type: 'Restaurant Management Web Application',
  description: 'Developed a digital food menu and ordering platform that enables users to browse menus, view food details, and improve the dining experience through an interactive and responsive interface. Designed with a modern UI to simplify menu management and enhance customer engagement for restaurants and cafes.',
  tech: ['React', 'JavaScript', 'Firebase', 'HTML', 'CSS'],
  github: 'https://github.com/Yashloop/FoodmenuHack',
}
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Innovative solutions and applications I've developed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg mb-3">
                    <span className="text-xs font-semibold text-blue-400">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 rounded-lg text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Source Code</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
