import React, { FC } from 'react'

import { List } from 'components/shared/List'
import { Post } from 'pages/Posts'
import { PostCard } from 'pages/Posts/PostCard'

interface Props {
  userId: string
}

export const Posts: FC<Props> = ({ userId }) => (
  <List
    listTitle="Posts"
    endpoint={`/posts?userId=${userId}`}
    component={(post: Post) => <PostCard key={post.id} post={post} linkToDetail />}
  />
)
