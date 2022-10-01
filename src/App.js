import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <>
      <header className="relative">
        <Navbar />
        <Banner />
      </header>
      <main className="h-[1000px]">
        {/* <About /> */}
        <Skills />
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
