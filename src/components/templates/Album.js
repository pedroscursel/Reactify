// Tools
import React from 'react'
import { Redirect , useHistory } from 'react-router-dom'
import _ from 'lodash'

import { connect } from 'react-redux'

// Components
import Header from './Header'
import AlbumTracks from './AlbumTracks'

// Assets
import { Button } from 'react-bootstrap'
import '../../styles/_album.scss'

const Album = ( props ) => {  
  let history = useHistory()

  // Data biding
  const { album, selectedalbum } = props
  const { items } = album
  const { artist, cover, name } = selectedalbum
  
  const hasTracks = () => {
    if( _.isEmpty( items ) ) {
      history.goBack()
    } else {
      return true
    }

  }
 
  return (
    <React.Fragment>
      { hasTracks() ? (
        <React.Fragment>
          <Header />
          <div className="wrap album">
            <Button onClick={ () => history.goBack() } className="voltar">Voltar</Button>
            <div className="capa">
              <img src={ cover } alt={ name } />
              <h2>{ name }</h2>
              <p>{ artist }</p>              
            </div>
            <AlbumTracks tracklist={ items } />
          </div>
        </React.Fragment>
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard'
          }}
        />
      ) }
    </React.Fragment>
  )
}

const mapStateToProps = ( state ) => {
  return {
    album: state.album,
    selectedalbum: state.selectedalbum
  }
}

export default connect(mapStateToProps)(Album)
