import axios from "axios";

export const increment = (n) => {
  return {
    type: "INCREMENT",
    payload: n,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// Async action
export const getData = () => {
  return (dispatch) => {
    axios.get(`http://jsonplaceholder.typicode.com/users/`).then((res) =>
      dispatch({
        type: "FETCH_DATA",
        payload: res.data,
      })
    );
  };
};
