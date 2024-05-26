import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'
import "./App.css"

function App() {
  return (
    <div className='app bg-black w-screen h-screen overflow-x-hidden overflow-y-auto'>
      <NavBar></NavBar>
      <Main></Main>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}

export default App