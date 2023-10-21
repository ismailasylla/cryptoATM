import axios from "axios";
import { Action } from "../actions";
import { ActionType } from "../action-types";

const seachRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      });
    }
  };
};
