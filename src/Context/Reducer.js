export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //   "BQB1TPx16sF4-Kkh7nrxyH8cEDx8Bkqb9ynuAc5ch2pHdG8tRsso0iw2WESFXdi8Pnk465UUmzTaJ5qPWncFdqCvmlyubZy3u6z9q-xJsbUm4JIOd0eo4ltneKnp5Bif270fozTt8EhZs5xhuXswdtRGrA5fRDDjGSymJCUTdGxNSuPA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
