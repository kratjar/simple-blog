import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from 'components/shared/Button'

interface Props {
  resetError: () => void
}

export const Error: FC<Props> = ({ resetError }) => {
  const history = useHistory()

  const redirect = () => {
    resetError()
    history.replace('/')
  }

  return <Button onClick={redirect}>{'zpet na HP'}</Button>
}
