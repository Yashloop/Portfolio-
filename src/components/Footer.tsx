import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Yashloop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yasvanth-bala-g-4a4056299"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/iam_yash_8teen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-center flex items-center gap-2">
            &copy; {new Date().getFullYear()} Yasvanth Bala G. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> 
          </p>

          {/* Tagline */}
          <p className="text-slate-500 text-sm text-center">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
