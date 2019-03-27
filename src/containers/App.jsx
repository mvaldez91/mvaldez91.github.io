import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import useGetData from "../hooks/useGetData";

const App = ()=>{
    const data = useGetData();
    console.log(data)
    return data.length == 0 ? <h1>Cargando ...</h1> : (
      <Main>
          <Sidebar>
              <About
                avatar={data.avatar}
                name={data.name}
                profession={data.profession}
                bio={data.bio}
                address={data.address}
                social={data.social}
              >
              </About>
          </Sidebar>
          <Info>
              <Education data={data.education}/>
              <Experience data={data.experience}/>
              <Certificate data={data.certificate}/>
              <Skills data={data.skills}/>

          </Info>
      </Main>
    );
}

export default App;