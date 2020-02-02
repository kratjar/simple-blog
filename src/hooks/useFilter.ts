import { KeyboardEvent } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'

export const useFilter = () => {
  const [filter, setFilter] = useQueryParam('filter', StringParam)

  const handleFilterChange = ({ target }: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = target as HTMLInputElement

    setFilter(value, 'push')
  }

  return { filter, handleFilterChange }
}
