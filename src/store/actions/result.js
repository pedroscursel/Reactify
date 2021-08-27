import {
  SET_ALBUM,
  ADD_ALBUM,
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_ARTISTSALBUMS,
  ADD_ARTISTSALBUMS,
  SET_TRACKS,
  ADD_TRACKS,
  ADD_SELECTEDALBUM,
  SET_SELECTEDALBUM,
} from '../../utils/constants'

import { get } from '../../utils/api'

export const setAlbum = ( album ) => ({
  type: SET_ALBUM,
  album
})

export const addAlbum = ( album ) => ({
  type: ADD_ALBUM,
  album
})

export const setAlbums = ( albums ) => ({
  type: SET_ALBUMS,
  albums
})

export const addAlbums = ( albums ) => ({
  type: ADD_ALBUMS,
  albums
})

export const setArtists = ( artists ) => ({
  type: SET_ARTISTS,
  artists
})

export const addArtists = ( artists ) => ({
  type: ADD_ARTISTS,
  artists
})

export const setArtistalbums = ( artistsalbums ) => ({
  type: SET_ARTISTSALBUMS,
  artistsalbums
})

export const addArtistalbums = ( artistsalbums ) => ({
  type: ADD_ARTISTSALBUMS,
  artistsalbums
})

export const setTracks = ( tracks ) => ({
  type: SET_TRACKS,
  tracks
})

export const addTracks = ( tracks ) => ({
  type: ADD_TRACKS,
  tracks
})

export const addSelectedalbum = ( selectedalbum ) => ({
  type: ADD_SELECTEDALBUM,
  selectedalbum
})

export const setSelectedalbum = ( selectedalbum ) => ({
  type: SET_SELECTEDALBUM,
  selectedalbum
})

export const initiateGetResult = ( searchTerm ) => {
  return async ( dispatch ) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,artist,track&limit=5`

      const result = await get( API_URL )
      // console.log('axios result:', result)
      const { albums, artists, tracks } = result
      
      dispatch(setAlbums(albums))
      dispatch(setArtists(artists))
      dispatch(setTracks(tracks))
      
      return 
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const initiateGetAlbum = ( obje ) => {
  const { artist, cover, id, name, label } = obje
  const searchTerm = label
  const setalbum = { artist, cover, name, searchTerm }  
  
  return async ( dispatch ) => {
    try {
      const API_URL = `https://api.spotify.com/v1/albums/${encodeURIComponent(
        id
      )}/tracks`
      const result = await get( API_URL )
      dispatch( setSelectedalbum(setalbum) )
      return dispatch( setAlbum(result) )
    } catch (error) {
      console.log('initiateGetAlbum error', error)
    }
  }
}

export const initiateGetAtistAlbums = ( id ) => {
  return async ( dispatch ) => {
    try {
      const API_URL = `https://api.spotify.com/v1/artists/${encodeURIComponent(
        id
      )}/albums`

      const result = await get( API_URL )
      return dispatch( setArtistalbums(result) )
    } catch (error) {
      console.log('setArtistAlbums error', error)
    }
  }
}

export const initiateLoadMoreAlbums = ( url ) => {
  return async ( dispatch ) => {
    try {
      const result = await get( url )
      return dispatch( addAlbums(result.albums) )
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const initiateLoadMoreArtists = ( url ) => {
  console.log('more albums: ', url)
  return async ( dispatch ) => {
    try {
      const result = await get( url )
      return dispatch( addArtists(result.artists) )
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const initiateLoadMoreTracks = ( url ) => {
  return async ( dispatch ) => {
    try {
      const result = await get( url )
      return dispatch( addTracks(result.tracks) )
    } catch (error) {
      console.log('error', error)
    }
  }
}
