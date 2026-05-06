import { useState } from 'react'
import Navbar from './Navbar'
import Projectcard from './Projectcard'
import Contactlink from './Contactlink'
import Skillcard from './Skillcard'
import Themeswitch from './Themeswitch'
import Form from './Form'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <header id='headcontent'>
      <button id='themeswitch'></button>
          
        <div id='hamburgericon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
    <Navbar/>
    </header>
   
      <section id="home">
        <div id="center">
                <h1><span class="hi"> Hi  I'm  </span><span class="name">Caldavis Wangaruro</span></h1>
            
                <br/>
                <div>
                    <h4 class="desc">Tech-Creative.</h4>
                    <h4>Web designer & web developer.</h4>
                </div>
        </div>
      
      </section>

      <section id='about'>

        <h2 class="mada">About Me</h2>
          <div class="reveal reveal-right delay-2 home-img">
                   <img src="src\assets\IMG_20250306_182343.jpg" alt="Profile Picture" width="300px" />
             </div>
              <p class="ab-text">My name is Caldavis and I'm a web developer 
                    with a passion for front end development and design. I'm currently
                    a third year student at the Dedan Kimathi University of Technology pursuing a degree in Computer Science
                    . I aim to develop a career that will allow me to channel my creativity through crafting unique , 
                    purpose-driven software and engaging experiences.
              </p>
       
      </section>
      <section id='experience'>
         <h2>Skills</h2>
        <div id="skillholder">
          <Skillcard
          skilltitle={"HTML"}
          skillsrc={"fa-brands fa-html5"} 
         skilltext={"Constructing websites from the basis."}
         />
          <Skillcard
          skilltitle={"CSS"}
          skillsrc={"fa-brands fa-html5"} 
         skilltext={"Styling web apps , web sites to suite your intersets"}
         />
          <Skillcard
          skilltitle={"UI/UX"}
          skillsrc={"fa-brands fa-html5"} 
         skilltext={"Constructing websites from the basis."}
         />
          <Skillcard
          skilltitle="JAVASCRIPT"
          skillsrc="fa-brands fa-square-js"
         skilltext={"Constructing websites from the basis."}
         />
          <Skillcard
          skilltitle="HTML"
          skillsrc="fa-brands fa-react"
         skilltext="Interactivity to the websites"
         />

        </div>
      </section>


      <section id='projects'>
         <h2>My Projects</h2>
        <div id='projcardholder'>

          <Projectcard
          projimg=""
            projtitle="Facebook Landing Page"/>

          <Projectcard
           projimg=""
            projtitle ="My Portfolio"/>

          <Projectcard
           projimg="reactportfolio\src\assets\googlemybiz.png"
          projtitle="Google Mybusiness Landing Page"/>
        
        </div>
      </section>

      <section id='contact'>
        <h2>Let's talk</h2>
        <div id="contactlinks">
            <Contactlink 
              socsrc={"fab fa-github"}
              soclink={"https://github.com/thecaldavishow"}
              soctitle={"Github"}
      
             />
            <Contactlink
               socsrc={"fab fa-GMAILmail"}
               soctitle={"GMAIL"}/>

            <Contactlink 
            socsrc={"fab fa-instagram"}
            soctitle={"instagram"}/>

            <Contactlink
            socsrc={"fab fa-Linkedin"}
            soctitle={"Linkedin"}/>
          
        
        </div>
    <Form/>

      </section>
      
    

      

     
    </>
  )
}

export default App
