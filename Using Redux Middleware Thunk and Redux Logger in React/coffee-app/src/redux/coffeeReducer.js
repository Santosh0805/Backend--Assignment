const initialState = {
    loading: false,
    coffees: [],
    error: ''
  };
  
  const coffeeReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_COFFEE_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_COFFEE_SUCCESS':
        return {
          loading: false,
          coffees: action.payload,
          error: ''
        };
      case 'FETCH_COFFEE_FAILURE':
        return {
          loading: false,
          coffees: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default coffeeReducer;
  