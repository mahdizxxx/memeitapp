import React from 'react'
import styled from 'styled-components'

import Avatar from '../avatar'
import { Username } from '../texts'

const HeaderMenu = ({ username, avatar }) => {
  return (
    <AvatarUsername>
      <Avatar url={avatar}></Avatar>
      <UserNameWrapper>
        <Username>{username}</Username>
      </UserNameWrapper>
    </AvatarUsername>
  )
}

const UserNameWrapper = styled.div`
  margin-left: 12px;
`

const AvatarUsername = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

export default HeaderMenu
