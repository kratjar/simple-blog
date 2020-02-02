import AntCard, { CardProps } from 'antd/es/card'
import styled from '@emotion/styled'

import { ThemeProps } from 'theme'

export const Card = styled(AntCard)<CardProps & ThemeProps>`
  margin: ${({ theme }) => theme.spacing(3)} 0;
  padding: ${({ theme }) => theme.spacing(3)};
  width: 100%;
`
