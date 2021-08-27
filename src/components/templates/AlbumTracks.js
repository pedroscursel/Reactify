// Tools
import React from 'react'

const AlbumTracks = ( props ) => {
  
  const { tracklist } = props

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`
  }

  console.log(tracklist)

  return (
    <React.Fragment>
      <table className="faixas">
        <tbody>
          { Object.keys( tracklist ).length > 0 && (
            tracklist.map((item, index) => {
              return (
                <tr key={ index }>
                  <td> { item.track_number } </td>
                  <td> { item.name } </td>
                  <td> { millisToMinutesAndSeconds(item.duration_ms) } </td>
                </tr>
              )
            })
          ) }
        </tbody>
        <tfoot>
          <tr>
            <td>
            
            </td>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  )
}

export default AlbumTracks