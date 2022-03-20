const BASE_URL = 'https://opendata.vitoria.es/api/recurso/'

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
