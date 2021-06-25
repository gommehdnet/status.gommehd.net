import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`;

const Logo = styled.img``;

const Header = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const HeaderCompound = () =>
  process.env.REACT_APP_LOGO || process.env.REACT_APP_NAME ? (
    <Header className="app-header">
      {process.env.REACT_APP_LOGO ? (<>
        <Logo
          className="light-logo"
          src={process.env.REACT_APP_LOGO}
          alt={process.env.REACT_APP_NAME}
        />
        <Logo
          className="dark-logo"
          src={process.env.REACT_APP_DARK_LOGO}
          alt={process.env.REACT_APP_NAME}
        />
      </>) : (
        <Title>{process.env.REACT_APP_NAME}</Title>
      )}
    </Header>
  ) : null;

export default HeaderCompound;
