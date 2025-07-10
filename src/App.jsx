

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import ChatbotWidget from "./components/ChatbotWidget";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";


const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <LazyLoad height={"100vh"}>
          <section id="services">
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <LazyLoad height={"100vh"}>
          <Portfolio />
        </LazyLoad>
      </Suspense>

      <section id="contact">
        <Contact />
      </section>

      <ChatbotWidget />
    </div>
  );
};

export default App;
