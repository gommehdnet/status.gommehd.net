import React from "react";
import styled from "styled-components";
import moment from "moment-with-locales-es6";
import ReactMarkdown from "react-markdown";
import l10n from '../../../language';

const Incident = styled.div`
  transition: 0.3s;
  border-left: 16px solid
    ${(props) =>
    props.active ? "rgba(177, 177, 177,0.2)" : "rgba(73, 144, 226, 0.2)"};
  background-color: white;
  border-radius: 3px;
  padding: 16px;
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  margin-top: 8px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

const Title = styled.h3`
  margin-right: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 0;
  color: #1e1e1e;
`;

const Comment = styled.div`
  white-space: break-spaces;
  color: #1e1e1e;
`;

const Status = styled.div`
  color: ${(props) => (props.active ? "#717171" : "#2f5888")};
  background-color: ${(props) =>
    props.active ? "rgba(96, 96, 96, 0.1)" : "rgba(73, 144, 226, 0.1)"};
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: 0.3s;
`;

const Created = styled.div`
  font-size: 13px;
  color: #6e6b6b;
  font-weight: bold;
`;

const IncidentCompound = ({ incident }) => (
  <Incident active={incident.closed_at}>
    <Details>
      <Created>
        {moment(incident.created_at)
          .format('LLL')
          .toUpperCase()}
      </Created>
      <Status className={incident.closed_at ? null : 'activeIncident'} active={incident.closed_at}>
        {incident.closed_at ? l10n.incidents.closed : l10n.incidents.active}
      </Status>
    </Details>
    <Title>{incident.title}</Title>
    <Comment>
      <ReactMarkdown className="incident" children={incident.body} />
    </Comment>
  </Incident>
);

export default IncidentCompound;
