import React, { FC, Fragment } from 'react'

import { Header } from 'components/Layout/Header'
import { Container } from 'components/Layout/Container'

export const Layout: FC = ({ children }) => (
  <Fragment>
    <Header />
    <Container> {children} </Container>
  </Fragment>
)
