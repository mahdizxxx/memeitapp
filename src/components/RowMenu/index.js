import React from 'react'
import styled from 'styled-components'

const RowMenu = ({ onClick, label }) => {
  return (
    <MenuRowContainer onClick={onClick}>
      <p>{label}</p>
    </MenuRowContainer>
  )
}

const MenuRowContainer = styled.div`
  width: 20rem;
  @media (max-width: 414px) {
    width: 21rem;
  }
  @media (max-width: 375px) {
    width: 19rem;
  }
  @media (max-width: 360px) {
    width: 18rem;
  }
  @media (max-width: 360px) {
    width: 16rem;
  }
  @media (min-height: 639px) and (max-width: 360px) {
    width: 18rem;
  }
  cursor: pointer;
  border-radius: 12px;
  padding: 12px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: ${props => props.theme.primary};
  margin: 9px 2px;
`

export default RowMenu
