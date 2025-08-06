import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from "./provider/Provider";
import Nav from "./components/layout/Nav";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Footer from "./components/layout/Footer";
import Memories from "./components/section/Memories";
import Contact from "./components/section/Contact";

function App() {
  return (
    <Provider>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Memories />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
