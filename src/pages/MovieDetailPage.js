import React from "react";
import { StyledContainer } from "../styles/global";
import { useParams } from "react-router-dom";
import { useAppState } from "../state/AppStateContext";
import styled from "styled-components";
import breakpoints, { defaultBreakpoints } from "styled-components-breakpoints";

const media = breakpoints(defaultBreakpoints);

const StyledMovieDetailPage = styled.div`
  display: flex;
  justify-content: flex-start;

  aside,
  section {
    display: flex;
  }

  section {
    padding-left: 1rem;
  }
`;

const StyledCoverImage = styled.img`
  width: 100px;
  height: 150px;
  ${media.minWidth("m")`
    width: 400px;
    height: 600px;
  `}
`;

const MovieDetailPage = () => {
  const { episodeId } = useParams();
  const { getMovieByEpisodeId } = useAppState();

  const { title, director, producer, opening_crawl } =
    getMovieByEpisodeId(episodeId);
  return (
    <StyledContainer>
      <StyledMovieDetailPage>
        <aside>
          <StyledCoverImage src={"/images/cover/" + episodeId + ".jpg"} />
        </aside>
        <section>
          {" "}
          <div>
            <h1>{title}</h1>
            <p>
              <strong>Director</strong> <span>{director}</span>
            </p>
            <p>
              <strong>Producer</strong> <span>{producer}</span>
            </p>
            <p>{opening_crawl}</p>
          </div>
        </section>
      </StyledMovieDetailPage>
    </StyledContainer>
  );
};

export default MovieDetailPage;
