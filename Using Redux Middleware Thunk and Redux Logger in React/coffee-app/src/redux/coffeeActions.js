import axios from 'axios';

export const fetchCoffeeRequest = () => {
  return {
    type: 'FETCH_COFFEE_REQUEST'
  };
};

export const fetchCoffeeSuccess = coffees => {
  return {
    type: 'FETCH_COFFEE_SUCCESS',
    payload: coffees
  };
};

export const fetchCoffeeFailure = error => {
  return {
    type: 'FETCH_COFFEE_FAILURE',
    payload: error
  };
};

export const fetchCoffees = (sortOrder) => {
  return dispatch => {
    dispatch(fetchCoffeeRequest());
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=${sortOrder}`)
      .then(response => {
        const coffees = response.data;
        dispatch(fetchCoffeeSuccess(coffees));
      })
      .catch(error => {
        dispatch(fetchCoffeeFailure(error.message));
      });
  };
};
