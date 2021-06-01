import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  height: 100vh;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={"icons/loading.gif"} width={64} height={64} />
    </LoadingContainer>
  );
};

export default Loading;
