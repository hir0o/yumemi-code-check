const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1'

export const fetcher = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${path}`, {
    headers: {
      'X-API-KEY': import.meta.env.VITE_OPENDATA_API_KEY,
    },
  })

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}
