// Tools
import React, { useState } from 'react'

// Actions
import {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMoreArtists,
  initiateLoadMoreTracks
} from '../store/actions/result'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Componentes
import Header from './templates/Header'
import SearchResult from './SearchResult'
import SearchForm from './SearchForm'
import Loader from './Loader'

// Assets
import '../styles/_dashboard.scss'

const Dashboard = ( props ) => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState(false)

  // Data biding
  const { isValidSession, history } = props

  const setTerm = ( searchTerm ) => {
    setSearchTerm( searchTerm )
  }

  const handleSearch = ( searchTerm ) => {
    if (isValidSession()) {
      setIsLoading(true)
      setSearchTerm(searchTerm)
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false)
      })
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      })
    }
  }

  // Carregar mais!
  const loadMore = async (type) => {
    if (isValidSession()) {
      const { dispatch, albums, artists, tracks } = props
      setIsLoading(true)
      switch (type) {
        case 'albums':
          await dispatch(initiateLoadMoreAlbums(albums.next))
          break
        case 'artists':
          await dispatch(initiateLoadMoreArtists(artists.next))
          break
        case 'tracks':
          await dispatch(initiateLoadMoreTracks(tracks.next))
          break
        default:
      }
      setIsLoading(false)
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      })
    }
  }

  const { albums, artists, tracks } = props
  const result = { albums, artists, tracks }

  return (
    <React.Fragment>
      { isValidSession() ? (
        <React.Fragment>
          <Header />
          <SearchForm handleSearch={ handleSearch } />
          <SearchResult
            history={ history }
            searchTerm={ searchTerm }
            setTerm={ setTerm }
            result={ result }
            loadMore={ loadMore }
            isValidSession={ isValidSession }
          />
          <Loader show={ isLoading }>Carregando...</Loader>
        </React.Fragment>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              session_expired: true
            }
          }}
        />
      )}
    </React.Fragment>
  )
}

const mapStateToProps = ( state ) => {
  return {
    albums: state.albums,
    artists: state.artists,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(Dashboard)
