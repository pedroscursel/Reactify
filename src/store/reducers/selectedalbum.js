import { SET_SELECTEDALBUM, ADD_SELECTEDALBUM } from '../../utils/constants'

const selectedalbumsReducer = (state = {}, action) => {
  const { selectedalbum } = action
  switch (action.type) {
    case SET_SELECTEDALBUM:
      return selectedalbum
    case ADD_SELECTEDALBUM:
      return {
        ...state,
        next: selectedalbum.next,
        items: [...state.items, ...selectedalbum.items]
      }
    default:
      return state
  }
}

export default selectedalbumsReducer
