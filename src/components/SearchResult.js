// Tools
import React from 'react'
import { Redirect } from 'react-router-dom'

// Componentes
import AlbumsList from './templates/AlbumsList'
import ArtistsList from './templates/ArtistsList'
import TracksList from './templates/TracksList'

// Assets
import '../styles/_searchResult.scss'

const SearchResult = ( props ) => {

  // binding
  const {
    isValidSession,
    loadMore,
    result,
    searchTerm,
  } = props
  const { albums, artists, tracks } = result
  
  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true
          }
        }}
      />
    )
  }

  return (
    <div className="wrap search-results">
      <AlbumsList albums={ albums } loadMore={ loadMore } label={ searchTerm } />
      <ArtistsList artists={ artists } loadMore={ loadMore } label={ searchTerm } />
      <TracksList tracks={ tracks } loadMore={ loadMore } label={ searchTerm } />
    </div>
  )
}

export default SearchResult
