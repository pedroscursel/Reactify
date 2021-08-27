// Tools
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// Components
import Cover from './Cover'

// Assets
import { Button } from 'react-bootstrap'
import music from '../../images/music.jpeg'

const AlbumsList = ( props ) => {

  // binding
  const { albums, label, loadMore } = props
  
  const searchTermHistory = () => {
    const { selectedalbum } = props
    return selectedalbum.searchTerm
  }

  return (
    <React.Fragment>
      { Object.keys( albums ).length > 0 && (
        
        <React.Fragment>
          <h2>Albuns encontrados para "{ !_.isEmpty( label ) ? label : searchTermHistory() }"</h2>
          <div className="albums">
            { albums.items.map((album, index) => {
              return (
                <React.Fragment key={ index }>
                  <div className="item">
                    <Cover 
                      artist={ album.artists[0].name }
                      cover= { !_.isEmpty( album.images ) ? album.images[0].url : music }
                      label={ label }
                      id={ album.id }
                      name={ album.name }
                      type={ 'album' } />
                    <div>
                      <h3>{ album.name }</h3>
                      <p>{ album.artists.map((artist) => artist.name).join(', ') }</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            }) }
          </div>

          <div className="load-more" onClick={() => loadMore('albums')}>
            <Button type="button" variant="success">
              Mais Albuns
            </Button>
          </div>

        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = ( state ) => {
  return {
    album: state.album,
    selectedalbum: state.selectedalbum
  }
}

export default connect(mapStateToProps)(AlbumsList)
