import React from 'react'
import styled from 'styled-components';

const Cards = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0,0.26);
  border-radius: 10px;
  `

const Card = (props) => {
  return (
    <Cards className={`${props.className}`}>
{props.children}
    </Cards>
  )
}

export default Card