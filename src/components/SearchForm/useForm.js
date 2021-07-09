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

const useForm = ({ initialKeyword, initialRating }) => {
  const [state, dispath] = useReducer(REDUCER, {
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, rating, times } = state;

  return {
    keyword,
    rating,
    times,
    updateKeyword: (keyword) =>
      dispath({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      }),
    updateRating: (rating) =>
      dispath({
        type: ACTIONS.UPDATE_RATING,
        payload: rating,
      }),
  };
};

export default useForm;