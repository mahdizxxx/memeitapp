import React from 'react'
import styled from 'styled-components'

const Header = props => {
  return (
    <HeaderContainer>
      <p>Header</p>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`

background-color: ${props => props.theme.primary};
}
`

export default Header
