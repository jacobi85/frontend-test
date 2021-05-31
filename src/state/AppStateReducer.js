import * as C from "./constants";
import { nanoid } from "nanoid";
import { formatDate } from "../utils/dateUtils";
import { findItemIndexByName } from "../utils/arrayUtils";

export const appStateReducer = (draft, action) => {
  switch (action.type) {
    case C.ADD_LOCAL_HISTORY_SEARCH_ITEM:
      draft.savedCharacters.push({
        id: nanoid(),
        name: action.payload.name,
        timeStamp: formatDate(Date.now())
      });
      break;
    case C.REMOVE_LOCAL_HISTORY_SEARCH_ITEM:
      const itemIndex = findItemIndexByName(draft.savedCharacters, action.payload.name)
      draft.savedCharacters.splice(itemIndex, 1)
    case C.CLEAR_LOCAL_HISTORY:
      draft.savedCharacters = [];
    default:
      return draft;
  }
};
