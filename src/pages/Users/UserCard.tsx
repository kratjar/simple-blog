import React, { FC, Fragment } from 'react'

import { Card } from 'components/shared/Card'
import { Paragraph, Title, Text } from 'components/shared/Typography'
import { Link } from 'components/shared/Link'
import { User } from 'pages/Users'

interface Props {
  user: User
  linkToDetail?: boolean
  extendedInfo?: boolean
}

export const UserCard: FC<Props> = ({ user, linkToDetail, extendedInfo }) => {
  const { id, name, username, email, address } = user

  const { street, suite, zipcode, city } = address

  return (
    <Card>
      <Title level={4}>{name}</Title>
      <Paragraph>{username}</Paragraph>

      <Paragraph type="secondary">{email}</Paragraph>

      {linkToDetail && (
        <Link to={`/users/${id}`}>
          <Text underline>See detail</Text>
        </Link>
      )}

      {extendedInfo && (
        <Fragment>
          <Paragraph>
            <div>{`${street} ${suite}`}</div>
            <div>{`${zipcode} ${city}`}</div>
          </Paragraph>
        </Fragment>
      )}
    </Card>
  )
}
