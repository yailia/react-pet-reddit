import { Reducer } from "redux";
import { ActionCreator, AnyAction } from "redux";


export type TRootState = {
  commentText: string;
  token: string;
}
const initialState: TRootState = {
  commentText: "Hello, world",
  token: 'no-token'
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const GET_TOKEN = 'GET_TOKEN'

export const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text
})

export const getToken = (token: string) =>( {
  type: 'GET_TOKEN',
  token
})

export const rootReducer: Reducer<TRootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    default:
      return state;
  }
}