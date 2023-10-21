export type SelectedFiltersType = {
  [param: string]: string | null | undefined | string[]
}

export const createQueryParams = (params: SelectedFiltersType) =>
  Object.entries(params)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const filteredValues = value.filter(v => v != null)

        return `${encodeURIComponent(key)}=${encodeURIComponent(
          filteredValues.join(',')
        )}`
      }

      if (value === null || value === undefined) {
        return ''
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .filter(part => part !== '')
    .join('&')