// Tools
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// Components
import Cover from './Cover'

// Assets
import { Button } from 'react-bootstrap'
import music from '../../images/music.jpeg'

const TracksList = ( props ) => {
  
  // binding
  const { label, loadMore, tracks } = props

  return (
    <React.Fragment>
      { Object.keys(tracks).length > 0 && (
        
        <React.Fragment>
          <h2>Músicas encontradas para "{ label }"</h2>
          <div className="tracks">
            { tracks.items.map((track, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="item">
                  <Cover 
                      artist={ track.artists[0].name }
                      cover= { !_.isEmpty( track.album.images ) ? track.album.images[0].url : music }
                      label={ label }
                      id={ track.album.id }
                      name={ track.name }
                      type={ 'track' } />
                    <div>
                      <h3>{ track.name }</h3>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <div className="load-more" onClick={() => loadMore('tracks')}>
            <Button type="button" variant="success">
              Mais Músicas
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

export default connect(mapStateToProps)(TracksList)
