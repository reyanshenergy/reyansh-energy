import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trust from "../components/Trust";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
        <Hero />
        <Services />
        <Trust />        
        <About />
        <Contact />
      <Footer />
      <Whatsapp />
     
    </>
  );
}
