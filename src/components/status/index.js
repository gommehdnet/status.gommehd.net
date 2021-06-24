import React from "react";
import styled from "styled-components";
import useStatus from "./useStatus";
import useRefetch from "./useRefetch";
import l10n from '../../language';

const StatusBar = styled.div`
  background-color: ${(props) =>
    props.backgroundColour ? props.backgroundColour : "#b1b1b1"};
  color: white;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const Status = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

const ReloadContainer = styled.span`
  background-color: transparent;
  text-align: right;
  padding: 0;
  font-size: 13px;
`;

const Reload = styled.button`
  background-color: transparent;
  color: white;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Code = styled.code`
  white-space: pre-wrap;
  display: block;
`;

// TODO: change all systems status based on current status of all components
const StatusCompound = ({ loading, error, components, refetch }) => {
  const [status] = useStatus(components);
  const [timeAgo] = useRefetch(refetch, loading);

  return (
    <>
      {error.hasError && (
        <Code>
          <div>{l10n.error.message.title}</div>
          <div>{l10n.error.message.body}</div>
          {JSON.stringify(error.errors, null, 3)}
        </Code>
      )}
      <StatusBar className={`status-bar ${status?.name}`} backgroundColour={status?.backgroundColour}>
        <Status>{status?.message}</Status>
        <ReloadContainer>{l10n.general.refresh}<Reload onClick={refetch}>{loading ? l10n.general.refreshing : timeAgo}</Reload></ReloadContainer>
      </StatusBar>
    </>
  );
};

export default StatusCompound;
