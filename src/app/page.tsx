import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import Service from "../components/Service.tsx"
import Coach from "../components/Coach.tsx"
import Contact from "../components/Contact.tsx";

export default function Home() {
  return (
    <>
    <Header />
    <About />
    <Service />
    <Coach />
    <Contact />
    </>
  );
}
