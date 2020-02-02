import React, { FC } from 'react'

import { Post } from 'pages/Posts'
import { PostCard } from 'pages/Posts/PostCard'
import { List } from 'components/shared/List'

const PostList: FC = () => (
  <List
    searchTitle="Search"
    listTitle="Posts"
    endpoint="/posts"
    shouldUseFilter
    shouldUsePage
    component={(post: Post) => <PostCard key={post.id} post={post} linkToDetail />}
  />
)

export default PostList
