import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';
import SchedulePage from './pages/SchedulePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'vision':
        return <VisionPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'announcements':
        return <AnnouncementsPage />;
      case 'results':
        return <ResultsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
