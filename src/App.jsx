import { Hero } from "./components/hero/Hero.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Para.jsx";
import { Sidebar } from "./components/sidebar/Sidebar.jsx";
import Services from "./components/serv/Services.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./App.css";
const App = () => {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
        <Sidebar />
      </section>
      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section>
        <Services></Services>
      </section>
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      <Portfolio></Portfolio>
      <section id="Contact">
        <Contact></Contact>
      </section>
    </>
  );
};
export default App;
