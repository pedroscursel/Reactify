// Tools
import React, { useState } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  initiateLoadMoreAlbums
} from '../../store/actions/result'

// Components
import Header from './Header'
import AlbumsList from './AlbumsList'
import Loader from '../Loader'

const Artists = ( props ) => {
  const [ isLoading, setIsLoading ] = useState(false)

  // binding
  const {
    albums,
    history,
    isValidSession,
    searchTerm
  } = props

  
  const loadMore = async () => {
    const { artistalbums, dispatch } = props

    console.log({ artistalbums })

    if (isValidSession()) {
      setIsLoading(true)
      await dispatch( initiateLoadMoreAlbums(artistalbums.next) )
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

  return (
    <React.Fragment>
      <Header />
      <div className="wrap search-results">
      <AlbumsList albums={ albums } loadMore={ loadMore } label={ searchTerm } history={ history } />
      </div>
      <Loader show={ isLoading }>Carregando...</Loader>
    </React.Fragment>
  )
}

const mapStateToProps = ( state ) => {
  return {
    albums: state.albums,
    artistalbums: state.artistalbums
  }
}

export default connect(mapStateToProps)(Artists)
