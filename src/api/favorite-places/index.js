import { clientFetch } from '../clientFetch'

const BASE_PLACES_URL = '/points'

export const getFavoritePlaces = () => clientFetch.get(BASE_PLACES_URL)

export const getFavoritePlace = (body) => clientFetch.post(BASE_PLACES_URL, body)

export const updateFavoritePlace = (body) => clientFetch.put(BASE_PLACES_URL, body)

export const deleteFavoritePlace = (id) => clientFetch.delete(BASE_PLACES_URL, id)
