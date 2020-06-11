import React from 'react'
import styled from 'styled-components'

const Avatar = props => {
  return <AvatarComponent src={props.url}></AvatarComponent>
}

const AvatarComponent = styled.img`
width: 80px;
height 80px;
border-radius: 40px;
`

export default Avatar
