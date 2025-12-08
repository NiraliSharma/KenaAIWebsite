import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MVPFeatures from './components/MVPFeatures/MVPFeatures';
import HowItWorks from './components/HowItWorks/HowItWorks';
import FutureAddOns from './components/FutureAddOns/FutureAddOns';
import InvestmentValue from './components/InvestmentValue/InvestmentValue';
import MarketOpportunity from './components/MarketOpportunity/MarketOpportunity';
import DemoVideo from './components/DemoVideo/DemoVideo';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <MVPFeatures />
        <HowItWorks />
        <FutureAddOns />
        <InvestmentValue />
        <MarketOpportunity />
        <DemoVideo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
