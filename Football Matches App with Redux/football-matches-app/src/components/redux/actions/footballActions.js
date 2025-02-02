import axios from 'axios';

export const fetchMatches = () => async (dispatch) => {
  dispatch({ type: 'FETCH_MATCHES_REQUEST' });

  try {
    const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?page=2');
    dispatch({ type: 'FETCH_MATCHES_SUCCESS', payload: response.data.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MATCHES_FAILURE' });
  }
};

export const addFavorite = (match) => ({
  type: 'ADD_FAVORITE',
  payload: match,
});
