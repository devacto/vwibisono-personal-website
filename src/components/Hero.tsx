
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#3B82F6"
        maxOpacity={0.2}
        flickerChance={0.1}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600 font-caveat">Hi, I am Victor 👋🏽</span>
          </h1>
          
          <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed bg-white px-6 py-4 rounded-lg shadow-sm">
            I am a software engineer who is passionate about building tools and products that people love. I am building in public and am writing my learnings.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/devacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/vwib/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/VictorWibisono" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:victor@wibisono.ai" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
