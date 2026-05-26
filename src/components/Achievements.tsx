import { Trophy, Award, Code, Lightbulb, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Best Paper Award',
      description: 'Won the Best Paper Award for "Threat Detection Algorithm Using TensorFlow" at the RACES\'25 National Conference',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '1st Place in App Development',
      description: '"Namma VEC" Interdepartmental Event, Velammal Engineering College',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '2nd Place - Paper Presentation',
      description: 'Secured 2nd place in a paper presentation on "Hybrid Drone Delivery" at MGR University',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '2nd Place - Technical Quiz',
      description: 'Secured 2nd place in Technical Quiz at SRM University',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Smart India Hackathon',
      description: 'Selected at Internal Hackathon at College level for Smart India Hackathon (SIH)',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recognition and awards throughout my professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                  {achievement.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
