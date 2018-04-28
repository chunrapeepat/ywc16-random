import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: white;
  position: block;
  font-size: 50px;
  margin: 100px 0;
  text-align: center;
  font-family: 'Roboto Slab', serif;
`

export default ({ text }) => <Heading>{text}</Heading>
