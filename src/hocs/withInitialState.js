import React, { useState, useEffect } from "react";
import { getStarwarsMovies } from "../api";
import Loading from '../components/Loading'
import { arraySortByValue } from "../utils/arrayUtils";

export function withInitialState(WrappedComponent) {
  return (props) => {
    const [initialState, setInitialState] = useState({
      movieList: [],
      savedCharacters: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const { results } = await getStarwarsMovies();
          const sortedResults = arraySortByValue(results, 'episode_id')
          setInitialState((prevState) => ({ ...prevState, movieList: sortedResults }));
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return <WrappedComponent {...props} initialState={initialState} />;
  };
}
