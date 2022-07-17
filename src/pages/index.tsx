import type { NextPage } from "next";
import Head from "next/head";
import { PositionProvider } from "../context/PositionContext";
import InitialAnimation from "../animations/InitialAnimation";

import Navbar from "../containers/Navbar";
import Sidebar from "../containers/Sidebar";
import HomePage from "../containers/HomePage";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Tulio Ruzo</title>
         </Head>
         <PositionProvider>
            <Navbar />
            <Sidebar />
            <div>
               <HomePage />
               <About />
               <Projects />
               <Contact />
            </div>
         </PositionProvider>
         <InitialAnimation />
      </>
   );
};

export default Home;
