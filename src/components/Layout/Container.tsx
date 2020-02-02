import styled from '@emotion/styled'

import { ThemeProps } from 'theme'

export const Container = styled.div<ThemeProps>`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: ${({ theme }) => `${theme.spacing(7)} ${theme.spacing(7)}`};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`
