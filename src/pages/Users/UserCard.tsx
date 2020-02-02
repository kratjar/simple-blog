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
  const { id, name, username, email } = user

  return (
    <Card>
      <Title level={4}>{name}</Title>
      <Paragraph>{username}</Paragraph>

      <Paragraph>{email}</Paragraph>

      {linkToDetail && (
        <Link to={`/users/${id}`}>
          <Text underline>See detail</Text>
        </Link>
      )}

      {extendedInfo && <Fragment />}
    </Card>
  )
}
