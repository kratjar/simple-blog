import AntTypography from 'antd/es/typography'
import styled from '@emotion/styled'
import { ThemeProps } from 'theme'

const { Text: AntText, Title: AntTitle, Paragraph: AntParagraph } = AntTypography

export const Text = styled(AntText)``

interface TitleProps {
  marginTop?: boolean
}

export const Title = styled(AntTitle, { shouldForwardProp: (prop: any) => prop !== 'marginTop' })<
  TitleProps & ThemeProps
>`
  ${({ marginTop, theme }) => marginTop && `margin-top: ${theme.spacing(5)}`}
`

export const Paragraph = styled(AntParagraph)``
