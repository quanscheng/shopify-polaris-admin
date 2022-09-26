export const useQueryStrings = () => {
  const queries = {}

  const searchParams = window.location.search
  const URLSearch = new URLSearchParams(searchParams)

  const iterator = URLSearch.keys()

  for (const key of iterator) {
    queries[key] = URLSearch.get(key)
  }

  return queries
}
