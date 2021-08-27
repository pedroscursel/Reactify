// Tools
import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

// Actions
import {
  initiateGetAtistAlbums,
  initiateGetAlbum
} from '../../store/actions/result'

const Cover = ( props ) => {

  let history = useHistory()
  const { artist, cover, dispatch, id, label, name, type } = props

  const handleAlbum = async ( id ) => {
    const obje = { artist, cover, id, label, name }

    switch (type) {
      case 'artist':
        dispatch( await initiateGetAtistAlbums(id)).then(() => {
          history.push({
            pathname: '/artista/' + encodeURIComponent( name )
          })
        })
        break

      case 'album':    
        dispatch( await initiateGetAlbum(obje)).then(() => {
          history.push({
            pathname: '/album/' + encodeURIComponent( name )
          })
        })
        break
        
        case 'track':
          dispatch( await initiateGetAlbum(obje)).then(() => {
            history.push({
              pathname: '/album/' + encodeURIComponent( name )
            })
          })
        break
        
      default:
        break
    }
  }
  
  return (
    <button 
      onClick={ () => handleAlbum( id ) }
      style={{ backgroundImage: `url(${ cover })` }} 
      className="cover" />
  )
}

const mapStateToProps = ( state ) => {
  return {
    album: state.album,
    selectedalbum: state.selectedalbum
  }
}

export default connect(mapStateToProps)(Cover)