import { Reducer } from "react";
import { IUserData, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, TMeRequestAction, TMeRequestErrorAction, TMeRequestSuccessAction } from "./action";

export type TMeState = {
  loading: boolean;
  error: string;
  data: IUserData,
}

type TMeActions = TMeRequestAction | TMeRequestSuccessAction | TMeRequestErrorAction;

export const meReducer: Reducer<TMeState, TMeActions> = (state, action) => {
  switch(action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      }
      case ME_REQUEST_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.error,
        }
      }
      case ME_REQUEST_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: action.data,
        }
      }
    default: {
      return {
        ...state,
      }
    }
  }
}