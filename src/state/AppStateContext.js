import React, { createContext, useContext, useEffect, Dispatch } from "react";
import { appStateReducer } from "./AppStateReducer";
import { useImmerReducer } from "use-immer";
import { withInitialState } from "../hocs/withInitialState";

const AppStateContext = createContext({});

export const AppStateProvider = withInitialState(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    const { movieList } = state;

    const getMovieByEpisodeId = (id) => {
      return movieList.find((movie) => movie.episode_id === parseInt(id));
    };

    return (
      <AppStateContext.Provider
        value={{ movieList, getMovieByEpisodeId, dispatch }}
      >
        {" "}
        {children}
      </AppStateContext.Provider>
    );
  }
);
export const useAppState = () => {
  return useContext(AppStateContext);
};
