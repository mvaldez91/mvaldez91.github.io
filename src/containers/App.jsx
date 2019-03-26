import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const App = ()=>{
    return (
      <Main>
          <Sidebar>
              <About></About>
          </Sidebar>
          <Info>
              <Experience/>
              <Education/>
              <Certificate/>
              <Skills/>
          </Info>
      </Main>
    );
}