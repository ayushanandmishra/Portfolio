import { useState } from 'react'
import './App.css'
import DrawerAppBar from './Components/Drawer'
import Intro from './Components/intro'
import Particle from './Components/Particle'
import { useMediaQuery } from '@mui/material'
import {  Navigate, Routes, Route } from "react-router-dom";
import Skills from './Components/skills'
import { AnimatePresence } from 'framer-motion'
import {useLocation} from "react-router-dom";
import Projects from './Components/Projects'
import AnimatedCursor from "react-animated-cursor";
import Aboutme from './Components/abooutme'

function App() {

  const matches = useMediaQuery('(min-width: 600px)')
  const location = useLocation();

  return (
    <>
      <Particle />

        <AnimatePresence mode='wait'>
        <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="159, 67 ,250"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
        />
      </div>
          <Routes  location={location} key={location.pathname}>

            <Route path='/' element={<Intro />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/aboutme' element={<Aboutme/>}/>

          </Routes>

        </AnimatePresence>

     
    </>
  )
}

export default App
