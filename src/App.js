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

const Rotate = styled.div`
  height: 100vh;
  transform: rotate(-30deg);
`

const Container = styled.div`
  height: 100vh;
  overflow: hidden;  
  z-index: 100;
`

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <video id="background-video" style={{ zIndex: -100, position:'absolute'}} loop src="assets/video/bg-tower-random.mp4"></video>
          <Rotate>
            <Random />
          </Rotate>
        </Container>

      </div>
    )
  }
}

export default App
