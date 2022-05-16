import axios from "axios";
import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { TRootState, TThunkAction } from "../store";

export const ME_REQUEST = 'ME_REQUEST';
export type TMeRequestAction = {
  type: typeof ME_REQUEST;
};
export const meRequest: ActionCreator<TMeRequestAction> = () => (
   {
     type: ME_REQUEST,
   }
);
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type TMeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
};
export interface IUserData {
  name?: string;
  iconImg?: string;
};
export const meRequestSuccess: ActionCreator<TMeRequestSuccessAction> = (data: IUserData) => (
   {
     type: ME_REQUEST_SUCCESS,
     data,
   }
);
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type TMeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
};
export const meRequestError: ActionCreator<TMeRequestErrorAction> = (error: string) => (
   {
     type: ME_REQUEST_ERROR,
     error,
   }
);

export const meRequestAsync = (): TThunkAction => (dispatch, getState) => {
  dispatch(meRequest());
  axios.get('https://oauth.reddit.com/api/v1/me.json',
  {
    headers: { 'Authorization': `Bearer ${getState().token}`},
  })
  .then((r) => {
    dispatch(meRequestSuccess({name: r.data?.name, iconImg: r.data?.snoovatar_img }));
  })
  .catch((e) => {
    console.log(e);
    dispatch(meRequestError(String(e)));
  })
}
