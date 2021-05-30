import React from "react";
import styled from "styled-components";

const AppFooter = styled.footer`
  height: 500px;
  background-color: rgb(31, 39, 44);
`;

const Footer = (props) => {
  return (
    <AppFooter>
      <section className="container">footer content</section>
    </AppFooter>
  );
};

export default Footer;
