import {SERVICES_FETCH} from '../actions/actionTypes.js';

const initialState = {
  listOfServices: [],
  filteredServices: [],
  activeServices: [],
  currentService: null
}

export function servicesReducer (state = initialState, action) {
  switch(action.type) {
    case SERVICES_FETCH: {
      return {
        ...state,
        listOfServices: action.payload
      }
    }
    default:
      return state;
  }
} 