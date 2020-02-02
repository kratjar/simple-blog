import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Post } from 'pages/Posts'
import { PostCard } from 'pages/Posts/PostCard'
import { List } from 'components/shared/List'

const PostList: FC = () => {
  const { t } = useTranslation()

  return (
    <List
      searchTitle={t('search')}
      listTitle={t('posts')}
      endpoint="/posts"
      shouldUseFilter
      shouldUsePage
      component={(post: Post) => <PostCard key={post.id} post={post} linkToDetail linkToAuthor />}
    />
  )
}

export default PostList
