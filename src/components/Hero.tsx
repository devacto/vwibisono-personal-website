
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello Friends 👋🏽</span>
          </h1>
          <p className="hero-description">
            I write about software engineering, system design, and building scalable applications. 
            Currently working on distributed systems and sharing insights from the trenches.
          </p>
          <div className="hero-buttons">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Read Latest Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
          <div className="hero-social">
            <a href="#" className="hero-social-link">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/vwib/" className="hero-social-link">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/VictorWibisono" className="hero-social-link">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hero-social-link">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
