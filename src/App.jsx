import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <Hero/>
    </section>
    <section>
      <Skills/>
    </section>
    <Portfolio/>
    <section>
      <Contact/>
    </section>
  </div>;
};

export default App 