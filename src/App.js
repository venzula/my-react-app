import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Skills from './components/skills'
import './App.css'
import Header from './components/header'
import Projects from './components/projects'
import Separator from './components/separator'

const App = () => {
  // Javascript Part Goes Here
  return (
    // HTML Part Goes Here
    <div>
      <Navbar />
      <Header />
      <Separator />
      <Projects />
      <Separator />

      <Skills />
      <Separator />

      <Footer />
    </div>
  );
}

export default App
