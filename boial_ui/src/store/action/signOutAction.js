import { ActionTypes } from "../actionType";

export const signOut = () => {
  return async (dispatch, action) => {
    dispatch(setUserSignOutData());
  }
}

export const setUserSignOutData = () => {
  console.log("calling setUserSignOutData from Signout Action.");
  return {
    type: ActionTypes.SIGN_IN,
    payload: {userInfo:{email: null,role: null,token: null}}
  };
};

// {userInfo:{email: null,role: null,token: null}}