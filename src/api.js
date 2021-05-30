
const base_url = 'https://swapi.dev/api/';

export const getStarwarsMovies = async () => {
    return fetch(`${base_url}films/`).then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error while loading films.");
          }
        }
      );
};
