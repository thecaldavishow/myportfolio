import { useState } from 'react'
import myLogo from './assets/logo.png'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header id='headcontent'>
      <button id='themeswitch'></button>
          <nav id="navbar">
                      <a href="#home" class="active">Home</a>
                      <a href="#about" >About</a>
                      <a href="#skills">Experience</a>
                      <a href="#projects">Projects</a>
                      <a href="#contact">Contact</a>                
        </nav>
        <div id='hamburgericon'>
          <span></span>
          <span></span>
          <span></span>
        </div>

    </header>
   
      <section id='home'>
        <div id="center">
                <h1><span class="hi"> Hi  I'm  </span><span class="name">Caldavis Wangaruro</span></h1>
            
                <br/>
                <div>
                    <h4 class="desc">Tech-Creative.</h4>
                    <h4>Web designer & web developer.</h4>
                </div>
        </div>
      
      </section>

      <section id='About'></section>
      <section id='experience'></section>
      <section id='projects'></section>
      <section id='contact'></section>
    

      

     
    </>
  )
}

export default App
