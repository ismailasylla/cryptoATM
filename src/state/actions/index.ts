import { ActionType } from "../action-types";

interface SearchCryptoAtmsAction {
  type: ActionType.SEARCH_CRYPTOATMS;
}
interface SearchCryptoAtmsSuccessAction {
  type: ActionType.SEARCH_CRYPTOATMS_SUCCESS;
  payload: string[];
}
interface SearchCryptoAtmsErrorAction {
  type: ActionType.SEARCH_CRYPTOATMS_ERROR;
  payload: string;
}

export type Action =
  | SearchCryptoAtmsAction
  | SearchCryptoAtmsSuccessAction
  | SearchCryptoAtmsErrorAction;
