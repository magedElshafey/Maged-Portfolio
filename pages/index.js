import Head from "next/head";
import About from "../Components/About";
import Contact from "../Components/Contact/Contact";
import Hero from "../Components/Hero";

import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maged | front-end developer</title>
        <meta name="descreption" content="generated by next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
