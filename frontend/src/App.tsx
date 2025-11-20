import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallNowCTA from "./components/CallNowCTA";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/services/ServiceDetail";
import ProjectDetail from "./pages/projects/ProjectDetail";

const App = () => {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <CallNowCTA />
    </div>
  );
};

export default App;
