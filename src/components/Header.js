import React from "react";
import styled from "styled-components";

const AppHeader = styled.div`
  position: relative;
  height: 800px;
  background-image: url("/images/hero.jpg");
`;

const HeaderImageFadeOut = styled.div`
  position: absolute;
  width: 100%; /* Full width (cover the whole page) */
  height: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: -moz-linear-gradient(
    top,
    rgba(23, 28, 34, 0) 0%,
    rgba(23, 28, 34, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(23, 28, 34, 0) 0%,
    rgba(23, 28, 34, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(23, 28, 34, 0) 0%,
    rgba(23, 28, 34, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00171c22', endColorstr='#171c22',GradientType=0 ); /* IE6-9 */
`;

const Header = (props) => {
  return (
    <AppHeader>
      <HeaderImageFadeOut />
    </AppHeader>
  );
};

export default Header;
