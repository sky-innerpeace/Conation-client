/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_USER, LOGOUT_USER } from "../action/types";
const initialState = {
  userId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, userId: action.payload };
    case LOGOUT_USER:
      return { ...state, userId: "" };
    default:
      return state;
  }
}
