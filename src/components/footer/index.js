import React from "react";
import styled from "styled-components";
import l10n from "../../language";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Branding = styled.a`
  font-size: 13px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const FooterCompound = () => (
  <Footer>
    <Branding
      visible={process.env.REACT_APP_BRANDING !== "false"}
      href="https://gommehd.net/terms"
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
