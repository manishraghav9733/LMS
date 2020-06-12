const INITIAL_STATE = {
  isSignedIn: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isSignedIn: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isSignedIn: false,
      };
    default:
      return state;
  }
};
