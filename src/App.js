import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Particles } from '@blackbox-vision/react-particles';
import Cursor from "react-special-cursor";
import { AiOutlineArrowUp } from "react-icons/ai";
function App() {

  return (
    <Cursor
    >
      <div style={{ overflow: "hidden", position: "relative" }}>
        <Particles
          id="simple"
          width="100vw"
          height="100vh"
          style={{
            backgroundColor: "#0B1121",
          }}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 48.724632738080714,
                  "line_linked": {
                    "opacity": 0.6005166088086743
                  }
                },
                "bubble": {
                  "distance": 250,
                  "size": 0,
                  "duration": 2,
                  "opacity": 0,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
          }}
        />
        <header className="relative">
          <Navbar />
          <Banner />
        </header>
        <main className="">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <a href="#home" className="bg-primary rounded-full flex justify-center items-center fixed bottom-[10%] right-[10%] w-10 h-10">
            < AiOutlineArrowUp className="text-[1rem] text-secondary" />
          </a>
        </main>
        <Footer></Footer>
      </div>
    </Cursor>
  );
}

export default App;
