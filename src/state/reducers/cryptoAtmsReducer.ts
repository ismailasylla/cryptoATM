import { Action } from "../actions";
import { ActionType } from "../action-types";

interface CryptoAtmState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (
  state: CryptoAtmState = initialState,
  action: Action
): CryptoAtmState => {
  switch (action.type) {
    case ActionType.SEARCH_CRYPTOATMS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_CRYPTOATMS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_CRYPTOATMS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
