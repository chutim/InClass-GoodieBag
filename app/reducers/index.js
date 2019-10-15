import axios from "axios";

//1 action types
const GOT_ALL_CANDIES = "GOT_ALL_CANDIES";
const GOT_SINGLE_CANDY = "GOT_SINGLE_CANDY";
const CHANGED_QUANTITY = "CHANGED_QUANTITY";

//2a action creators
const gotAllCandies = candies => ({
  type: GOT_ALL_CANDIES,
  candies
});

const gotSingleCandy = candy => ({
  type: GOT_SINGLE_CANDY,
  candy
});

const changeQuantity = candy => ({
  type: CHANGED_QUANTITY,
  candy
});

//2b thunk creators
export const getAllCandies = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/candies");
    dispatch(gotAllCandies(data));
  };
};

export const getSingleCandy = id => {
  return async dispatch => {
    const { data } = await axios.get(`/api/candies/${id}`);
    dispatch(gotSingleCandy(data));
  };
};

export const increaseQuantity = id => {
  return async dispatch => {
    const { data } = await axios.put(`/api/candies/${id}/increase`);
    dispatch(changeQuantity(data));
  };
};

export const decreaseQuantity = id => {
  return async dispatch => {
    const { data } = await axios.put(`/api/candies/${id}/decrease`);
    dispatch(changeQuantity(data));
  };
};

//3 reducer

//4 store

const initialState = {
  candies: [],
  singleCandy: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return { ...state, candies: action.candies };
    case GOT_SINGLE_CANDY:
      return { ...state, singleCandy: action.candy };
    case CHANGED_QUANTITY:
      return { ...state, singleCandy: action.candy };
    default:
      return state;
  }
};

export default rootReducer;
