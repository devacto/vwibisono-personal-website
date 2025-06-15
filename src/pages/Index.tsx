
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
