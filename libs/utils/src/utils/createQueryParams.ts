export type SelectedFiltersType = {
  [param: string]: string | null | undefined | string[]
}

/**
 * The createQueryParams function takes an object of key-value pairs and returns a string that can be used as the query params in a URL.
 *
 *
 * @return A string of the form:
 *
 */
export const createQueryParams = (params: SelectedFiltersType) =>
  Object.entries(params)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const filteredValues = value.filter(v => v != null)

        return `${encodeURIComponent(key)}=${encodeURIComponent(
          filteredValues.join(',')
        )}`
      }

      if (!value || !key?.toString()) {
        return ''
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .filter(part => part !== '')
    .join('&')
