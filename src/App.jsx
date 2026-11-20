import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Products from './components/Products';
import Advertisements from './components/Advertisements';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getFacebookUrl, getMessengerUrl, getWhatsAppUrl } from './utils/links';

export default function App() {
  // Developer hint only (never shown to visitors, never in the production build).
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    const missing = [];
    if (!getFacebookUrl()) missing.push('facebook.pageUrl');
    if (!getMessengerUrl()) missing.push('facebook.messengerUsername');
    if (!getWhatsAppUrl()) missing.push('whatsapp.number');
    if (missing.length) {
      console.info(
        `[ASALA] Not set yet in src/data/siteConfig.js: ${missing.join(', ')}. ` +
          'Those buttons show "Coming Soon" until you add them.'
      );
    }
  }, []);

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <QuickLinks />
        <Products />
        <Advertisements />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
