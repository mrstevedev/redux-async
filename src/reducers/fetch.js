export default function fetchReducer(state = { data: "" }, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
