import AntCard, { CardProps } from 'antd/es/card'
import styled from '@emotion/styled'

export const Card = styled(AntCard)<CardProps>`
  padding: ${({ theme }: any) => theme.spacing(3)};
`
