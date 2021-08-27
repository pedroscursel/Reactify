import { SET_ARTISTSALBUMS, ADD_ARTISTSALBUMS } from '../../utils/constants'

const artistsalbumsReducer = (state = {}, action) => {
  const { artistsalbums } = action
  switch (action.type) {
    case SET_ARTISTSALBUMS:
      return artistsalbums
    case ADD_ARTISTSALBUMS:
      return {
        ...state,
        next: artistsalbums.next,
        items: [...state.items, ...artistsalbums.items]
      }
    default:
      return state
  }
}

export default artistsalbumsReducer
