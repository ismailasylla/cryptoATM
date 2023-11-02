import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const searchCryptoAtms = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_CRYPTOATMS
    });

    try {
      const { data } = await axios.get("https://api.coincap.io/v2/assets", {
        params: {
          text: term
        }
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_CRYPTOATMS_SUCCESS,
        payload: names
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_CRYPTOATMS_ERROR,
        payload: err.message
      });
    }
  };
};
