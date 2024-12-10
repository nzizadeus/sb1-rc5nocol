import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { HeroSection } from './components/home/hero-section';
import { FeaturesSection } from './components/home/features-section';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
        </main>
      </div>
    </Router>
  );
}

export default App;