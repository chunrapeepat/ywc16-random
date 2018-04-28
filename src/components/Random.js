import React, {Component} from 'react'
import styled from 'styled-components'

import {groups, target, groupidToString, removed, WindowWidth} from '../helper'

const HiddenButton = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  bottom: 0;
  right: 0;
`

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  background: black;
  position: relative;
  overflow-x: hidden;
`

const Line = styled.div`
  width: 5px;
  height: 340px;
  position: absolute;
  top: -10px;
  left: calc(50% - 2.5px);
  background: #FBE196;
`

const SlideContainer = styled.div`
  width: 30000px;
  transition: 10s;
`

const Item = styled.img`
  height: 280px;
  margin-right: 10px;
`

export default class Random extends Component {
  state = {
    // default to center when screen width is 1680px;
    left: 170 + (WindowWidth / 2 - window.innerWidth / 2),
    items: [],
  }

  constructor() {
    super()
    // i == 79 is the end
    const emptyArr = [...new Array(100)].map((x, i) => {
      if (i == 79)
        return target
      let result;
      do {
        result = parseInt(Math.random() * 10) % 6 + 1
      } while (removed.indexOf(result) !== -1)
      return result
    })
    this.state.items = emptyArr
  }

  startRandom = () => {
    this.setState({ left: this.state.left + 22000 })
  }

  render() {
    return (
      <div>
        <Container>
          <Line />
          <SlideContainer style={{'marginLeft': `-${this.state.left}px`}}>
            {this.state.items.map((x, i) => {
              return <Item key={`key${x}${i}`} src={`/assets/${groupidToString(x)}.png`}/>
            })}
          </SlideContainer>
        </Container>
        <HiddenButton onClick={this.startRandom} />
      </div>
    )
  }
}
