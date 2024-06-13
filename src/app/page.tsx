import Header from "../components/Header";
import About from "../components/About";
import Service from "../components/Service";
import Coach from "../components/Coach";
import Contact from "../components/Contact";
import Updates from "../components/Updates";

export default function Home() {
  return (
    <>
      <Header />
      <Updates />
      <About />
      <Service />
      <Coach />
      <Contact />
    </>
  );
}
