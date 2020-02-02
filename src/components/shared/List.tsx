import React, { FC, Fragment, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from 'components/shared/Input'
import { Pagination } from 'components/shared/Pagination'
import { Title } from 'components/shared/Typography'
import { useAsyncCall } from 'hooks/useAsyncCall'
import { usePagination } from 'hooks/usePagination'
import { useFilter } from 'hooks/useFilter'

interface FilterProps {
  searchTitle: string
  shouldUseFilter: true
}

interface NoFilterProps {
  searchTitle?: undefined
  shouldUseFilter?: undefined
}

interface PageProps {
  shouldUsePage?: true
}

interface AsyncCallProps {
  listTitle: string
  endpoint: string
  component: (item: any) => ReactElement
}

type Props = AsyncCallProps & PageProps & (FilterProps | NoFilterProps)

export const List: FC<Props> = ({ searchTitle, listTitle, component, endpoint, shouldUseFilter, shouldUsePage }) => {
  const { t } = useTranslation()
  const { page, handlePageChange } = usePagination()
  const { filter, handleFilterChange } = useFilter()

  const params = { filter: shouldUseFilter && filter, page: shouldUsePage && page }

  const [data, total] = useAsyncCall(endpoint, params)

  return (
    <Fragment>
      {shouldUseFilter && (
        <Fragment>
          <Title level={3} marginTop>
            {searchTitle}
          </Title>

          <Input defaultValue={filter} onPressEnter={handleFilterChange} />
        </Fragment>
      )}

      <Title level={3} marginTop>
        {data.length ? listTitle : t('no-data')}
      </Title>

      {data.map(component)}

      {shouldUsePage && <Pagination total={total} current={page} onChange={handlePageChange} hideOnSinglePage />}
    </Fragment>
  )
}
