import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Link } from 'components/shared/Link'
import { ThemeProps } from 'theme'

const Nav = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const NavHeader = styled.div<ThemeProps>`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: ${({ theme }) => `${theme.spacing(7)} ${theme.spacing(7)}`};
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const NavLeft = styled.div<ThemeProps>`
  width: 70%;
  text-align: left;

  ${({ theme }) => theme.mediaMin('xs')} {
    width: 75%;
  }

  ${({ theme }) => theme.mediaMin('sm')} {
    width: 80%;
  }

  ${({ theme }) => theme.mediaMin('md')} {
    width: 85%;
  }

  ${({ theme }) => theme.mediaMin('lg')} {
    width: 90%;
  }
`

const NavRight = styled.div<ThemeProps>`
  width: 30%;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaMin('xs')} {
    width: 25%;
  }

  ${({ theme }) => theme.mediaMin('sm')} {
    width: 20%;
  }

  ${({ theme }) => theme.mediaMin('md')} {
    width: 15%;
  }

  ${({ theme }) => theme.mediaMin('lg')} {
    width: 10%;
  }
`

export const Header: FC = () => (
  <Nav>
    <NavHeader>
      <NavLeft>Simple Blog</NavLeft>
      <NavRight>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
      </NavRight>
    </NavHeader>
  </Nav>
)
