import React, {Component} from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'

import {groups, target, groupidToString, removed, WindowWidth, SoundMode} from '../helper'

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
  transition: all 15s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 0.6, 0.1);
`

const Item = styled.img`
  height: 280px;
  margin-right: 10px;
`

const Base = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 999;

  & > div:nth-child(1) {
    width: 20px;
    height: 350px;
    left: 0;
    top: -10px;
    position: absolute;
    background: #F8D063;
  }

  & > div:nth-child(2) {
    width: 20px;
    height: 350px;
    right: 0;
    top: -10px;
    position: absolute;
    background: #F8D063;
  }
`

export default class Random extends Component {
  state = {
    // default to center when screen width is 1680px;
    left: 170 + (WindowWidth / 2 - window.innerWidth / 2),
    items: [],
    playsound: false,
    playDingSound: false,
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
    this.setState({ left: this.state.left + 22000, playsound: true })
    setTimeout(() => {
      this.setState({ playDingSound: true })
    }, 15 * 1000)
  }

  render() {
    return (
      <div>
        {this.state.playsound &&
          <Sound autoLoad={true} url={`/sounds/${SoundMode}.mp3`} playStatus={Sound.status.PLAYING}/>
        }
        {this.state.playDingSound &&
          <Sound autoLoad={true} url={`/sounds/ding.mp3`} playStatus={Sound.status.PLAYING}/>
        }
        <Base>
          <div></div>
          <div></div>
        </Base>
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
