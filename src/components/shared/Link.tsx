import { Link as RouterLink } from 'react-router-dom'
import styled from '@emotion/styled'

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`
