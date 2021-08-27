import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import albumReducer from './reducers/album'
import albumsReducer from './reducers/albums'
import artistsReducer from './reducers/artists'
import artistalbumsReducer from './reducers/artistsalbums'
import tracksReducer from './reducers/tracks'
import selectedalbumReducer from './reducers/selectedalbum'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    album: albumReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    artistalbums: artistalbumsReducer,
    tracks: tracksReducer,
    selectedalbum: selectedalbumReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
