import React, { useState } from 'react';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Summary from './components/Summary/Summary';

function App() {
  const [summaryVisible, setSummaryVisible] = useState(false);

  const toggleSummary = () => {
    setSummaryVisible(!summaryVisible);
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <Summary isVisible={summaryVisible} toggleVisibility={toggleSummary}/>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
