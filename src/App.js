import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Heading from './components/Heading'

injectGlobal`
  body {
    margin: 0;
    background: black;
    font-family: sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Heading text="Junior Webmaster Camp #10"/>
      </div>
    )
  }
}

export default App
