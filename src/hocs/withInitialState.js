import React, { useState, useEffect } from "react";
import { getStarwarsMovies } from "../api";
import Loading from '../components/Loading'

export function withInitialState(WrappedComponent) {
  return (props) => {
    const [initialState, setInitialState] = useState({
      movieList: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const { results } = await getStarwarsMovies();
          setInitialState({movieList: results});
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
