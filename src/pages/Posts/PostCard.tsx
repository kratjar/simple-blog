import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from 'components/shared/Card'
import { Paragraph, Title, Text } from 'components/shared/Typography'
import { Link } from 'components/shared/Link'
import { Post } from 'pages/Posts'

interface Props {
  post: Post
  linkToDetail?: boolean
  linkToAuthor?: boolean
}

export const PostCard: FC<Props> = ({ post, linkToDetail, linkToAuthor }) => {
  const { t } = useTranslation()
  const { id, title, body, userId } = post

  return (
    <Card>
      <Title level={4}>{title}</Title>
      <Paragraph>{body}</Paragraph>

      {linkToDetail && (
        <div>
          <Link to={`/posts/${id}`}>
            <Text underline>{t('see-detail')}</Text>
          </Link>
        </div>
      )}

      {linkToAuthor && (
        <Link to={`/users/${userId}`}>
          <Text underline>{t('see-author-detail')}</Text>
        </Link>
      )}
    </Card>
  )
}
