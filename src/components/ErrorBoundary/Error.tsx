import React, { FC, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from 'components/shared/Button'
import Paragraph from 'antd/es/typography/Paragraph'
import { PATHS } from 'config/paths'

interface Props {
  resetError: () => void
}

export const Error: FC<Props> = ({ resetError }) => {
  const history = useHistory()
  const { t } = useTranslation()

  const redirect = () => {
    resetError()
    history.replace(PATHS.HOME)
  }

  return (
    <Fragment>
      <Paragraph type="warning">{t('error-boundary-description')}</Paragraph>
      <Button onClick={redirect}>{t('back-to-homepage')}</Button>
    </Fragment>
  )
}
