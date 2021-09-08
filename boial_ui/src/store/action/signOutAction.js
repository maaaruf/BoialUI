import { ActionTypes } from "../actionType";

export const signOut = () => {
    return async (dispatch, action) => {
      dispatch(setUserLogOut());
      localStorage.removeItem(ActionTypes.SIGN_IN);
      //history.push('/');
      //localStorage.clear();
      //document.location.reload();
     }
  }

  export const setUserLogOut = () => {
    return {
      type: ActionTypes.SIGN_OUT
    };
  };