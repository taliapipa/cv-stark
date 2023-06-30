import { useState } from 'react'
import "../../src/App.css"
import About from "../Components/About"
import Hero from "../Components/Hero"
import Education from "../Components/Education"
import Experience from "../Components/Experience"
import More from "../Components/More"
import { CV } from '../CV/cv'

const { hero, education, experience, lenguajes, habilities, volunteer } = CV

function App() {

  return (
    <div className='App'>
      <Hero hero={hero} />
      <About hero={hero}/>
      <Education education={education}/>
      <Experience experience={experience}/>
      <More
        lenguajes={lenguajes}
        habilities={habilities}
        volunteer={volunteer}/>
    </div>
  )
}

export default App
