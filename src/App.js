import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Random from './components/Random'

injectGlobal`
  body {
    margin: 0;
    background: black;
    font-family: sans-serif;
  }
`

const Background = styled.div`
  z-index: -999;
  position: absolute;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: linear-gradient(10deg, #00152a, #3E0009);
`

const Rotate = styled.div`
  height: 100vh;
  transform: rotate(-30deg);
`

const Container = styled.div`
  overflow: hidden;
`

class App extends Component {
  render() {
    return (
      <div>
        {/* <Background /> */}
        <video id="background-video" style={{ zIndex: -100, position:'absolute'}} loop src="assets/video/bg-tower-random.mp4"></video>
        <img src="assets/logo16write.svg" style={{ position: 'absolute', marginLeft: "3%", marginTop: "3%",  height:"5rem"}}  alt="logo"/>
        <Container>
          <Rotate>
            <Random />
          </Rotate>
        </Container>
      </div>
    )
  }
}

export default App
