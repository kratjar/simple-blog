import AntButton, { ButtonProps } from 'antd/es/button'
import styled from '@emotion/styled'

import { ThemeProps } from 'theme'

export const Button = styled(AntButton)<ButtonProps & ThemeProps>`
  padding: ${({ theme }) => theme.spacing(1)};
`
