import React, { FC, Fragment } from 'react'

import { Card } from 'components/shared/Card'
import { Input } from 'components/shared/Input'
import { Pagination } from 'components/shared/Pagination'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { usePagination } from 'hooks/usePagination'
import { useFilter } from 'hooks/useFilter'
import { User } from 'pages/Users'

const List: FC = () => {
  const { page, handlePageChange } = usePagination()
  const { filter, handleFilterChange } = useFilter()

  const [data, total] = useAsyncCall('/users', { page, filter })

  const users: User[] = data

  return (
    <Fragment>
      <Input defaultValue={filter} onPressEnter={handleFilterChange} />
      {users.map(({ name, username, email }) => (
        <Card>
          <div>{name}</div>
          <div>{username}</div>
          <div>{email}</div>
        </Card>
      ))}
      <Pagination total={total} current={page} onChange={handlePageChange} hideOnSinglePage />
    </Fragment>
  )
}

export default List
