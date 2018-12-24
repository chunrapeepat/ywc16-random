import React, {Component} from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'

import {mode, target, groupidToString, removed, WindowWidth, SoundMode} from '../helper'

const Line = styled.div`
  width: 150vw;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  background: url(/assets/train.svg) center center;
  background-size: auto 100%;
`

const SlideContainer = styled.div`
  width: 25000px;
  transition: all 15s;
  transition-timing-function: ${mode.val};
`

const Item = styled.div`
  height: 1000px;
  width: 750px;
  margin-right: 10px;
  z-index: -999;
  display: inline-block;
  transform: translate3d(0, 350px, 0);
  will-change: transform;
  background: url(${props => props.src}) no-repeat center center;
  background: contain;
`

const OFFSET = 120

export default class Random extends Component {
  state = {
    // default to center when screen width is 1680px; - offset
    left: 170 + (WindowWidth / 2 - window.innerWidth / 2) - OFFSET,
    items: [],
    playsound: false,
    playDingSound: false,
  }

  constructor() {
    super()
    const emptyArr = [...new Array(35)].map((x, i) => {
      if (i == 30)
        return groupidToString(target)
      let result;
      do {
        result = parseInt(Math.random() * 10) % 6 + 1
      } while (removed.indexOf(result) !== -1)
      return groupidToString(result)
    })
    this.state.items = emptyArr
  }

  startRandom = () => {
    document.getElementById("background-video").play()
    this.setState({ left: this.state.left + 22650 + OFFSET, playsound: true })
    setTimeout(() => {
      document.getElementById("background-video").pause()
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
          <Line onClick={this.startRandom}/>
          <SlideContainer style={{'marginLeft': `-${this.state.left}px`}}>
            {this.state.items.map((x, i) => {
              return <Item key={`key${x}${i}`} src={`/assets/${x}.svg`}/>
            })}
          </SlideContainer>
      </div>
    )
  }
}
