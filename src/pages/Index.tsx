
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedArticles from '@/components/FeaturedArticles';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedArticles />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
