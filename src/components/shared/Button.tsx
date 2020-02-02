import AntButton, { ButtonProps } from 'antd/es/button'
import styled from '@emotion/styled'

export const Button = styled(AntButton)<ButtonProps>`
  padding: ${({ theme }: any) => theme.spacing(1)};
`
