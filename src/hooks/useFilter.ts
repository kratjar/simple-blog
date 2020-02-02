import { KeyboardEvent } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'

import { PARAMS } from 'config/url'

export const useFilter = () => {
  const [filter, setFilter] = useQueryParam(PARAMS.FILTER, StringParam)

  const handleFilterChange = ({ target }: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = target as HTMLInputElement

    setFilter(value, 'push')
  }

  return { filter, handleFilterChange }
}
