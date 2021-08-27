// Tools
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// Components
import Cover from './Cover'

// Assets
import { Button } from 'react-bootstrap'
import music from '../../images/music.jpeg'

const ArtistsList = ( props ) => {

  // binding
  const { artists, label, loadMore } = props

  return (
    <React.Fragment>
      { Object.keys(artists).length > 0 && (
        
        <React.Fragment>
          <h2>Artistas encontrados para "{ label }"</h2>
          <div className="artists">
            { artists.items.map((art, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="item">
                    <Cover 
                      artist={ art.name }
                      cover= { !_.isEmpty( art.images ) ? art.images[0].url : music }
                      label={ label }
                      id={ art.id }
                      name={ art.name }
                      type={ 'artist' } />
                    <div>
                      <h3>{ art.name }</h3>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <div className="load-more" onClick={() => loadMore('artists')}>
            <Button type="button" variant="success">
              Mais Artistas
            </Button>
          </div>

        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = ( state ) => {
  return {
    album: state.album
  }
}

export default connect(mapStateToProps)(ArtistsList)
