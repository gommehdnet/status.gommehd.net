import React from "react";
import styled from "styled-components";
import l10n from "../../language";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Branding = styled.a`
  color: #6e6b6b;
  font-size: 13px;
  text-decoration: none;
  transition: 0.3s;
  display: ${(props) => (props.visible ? "block" : "none")};

  :hover {
    opacity: 0.9;
  }
`;

const FooterCompound = () => (
  <Footer>
    <Branding
      visible={process.env.REACT_APP_BRANDING !== "false"}
      href="https://imprint.gommehd.net"
      rel="noopener"
      target="_blank"
    >
      {l10n.general.imprint}
    </Branding>
    <Branding
      visible={process.env.REACT_APP_BRANDING !== "false"}
      href="https://github.com/tadhglewis/issue-status"
      rel="noopener"
      target="_blank"
    >
      {l10n.general.branding}
    </Branding>
  </Footer>
);

export default FooterCompound;
