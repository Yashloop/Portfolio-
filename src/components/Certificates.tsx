import { useState } from 'react';
import { X, Award } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<{image: string; title: string; details: string} | null>(null);

  const certificates = [
    {
      image: '/public/cer1.jpg',
      title: 'Full Stack Web Development',
      subtitle: 'HDCP Certification',
      details: 'Honours Diploma in Computer Programme (HDCP) with an "A" grade.'
    },
    {
      image: '/public/cer2.jpg',
      title: 'JavaScript Course',
      subtitle: 'GUVI Certification',
      details: 'Successfully completed the JavaScript course at GUVI.'
    },
    {
      image: '/public/cer4.jpg',
      title: 'Mobile App Development',
      subtitle: 'Internship Certificate',
      details: 'Completed a two-month internship in Mobile App Development with Flutter & Android at Marcello Tech.'
    },
    {
      image: '/public/cer3.jpg',
      title: 'Best Paper Award',
      subtitle: 'RACES\'25 Conference',
      details: 'Awarded Best Paper for Threat Detection Algorithm Using TensorFlow at RACEs\' 25.'
    },
  ];

  return (
    <>
      <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Certificates
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Professional certifications and course completions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-700 relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23334155"/><text x="50%" y="50%" text-anchor="middle" fill="%2394a3b8" font-size="20" dy=".3em">Certificate</text></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 border border-slate-700"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="%23334155"/><text x="50%" y="50%" text-anchor="middle" fill="%2394a3b8" font-size="30">Certificate</text></svg>';
                }}
              />
              <div className="p-6 text-center border-t border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-slate-300">
                  {selectedCert.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
