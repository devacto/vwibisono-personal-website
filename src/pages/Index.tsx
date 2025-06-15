
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
