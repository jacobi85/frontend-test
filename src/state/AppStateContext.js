import React, { createContext, useContext, useEffect, Dispatch } from "react";
import { appStateReducer } from "./AppStateReducer";
import { useImmerReducer } from "use-immer";
import { save } from "../api";
import { withInitialState } from "../hocs/withInitialState";

const AppStateContext = createContext({});

export const AppStateProvider = withInitialState(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    const { movieList } = state;

    return (
      <AppStateContext.Provider value={{ movieList, dispatch }}>
        {" "}
        {children}
      </AppStateContext.Provider>
    );
  }
);
export const useAppState = () => {
  return useContext(AppStateContext);
};
