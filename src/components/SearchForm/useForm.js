import { useReducer } from 'react';

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
};

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const REDUCER = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

const useForm = ({ initialKeyword = '', initialRating = 'g' } = {}) => {
  const [{ keyword, rating }, dispatch] = useReducer(REDUCER, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeRating: ({ rating }) =>
      dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating }),
    keyword,
    rating,
  };
};

export default useForm;
