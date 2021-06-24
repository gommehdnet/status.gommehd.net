import React from "react";
import styled from "styled-components";
import Incident from "./incident";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";
import l10n from '../../language';

const Container = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const Title = styled.div`
  padding: 0 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;

const NoFound = styled.div`
  margin: 0 8px;
`;

const IncidentList = ({ loading, incidents }) => {
  const [hasMounted] = useDidMount();

  return (
    <Container>
      <Title>{l10n.incidents.title}</Title>
      {!loading || hasMounted ? (
        incidents?.length > 0 ? (
          incidents?.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))
        ) : (
          <NoFound>{l10n.error.noincidents}</NoFound>
        )
      ) : (
        <>
          <Skeleton className="incident-skeleton" />
          <Skeleton className="incident-skeleton" />
          <Skeleton className="incident-skeleton" />
        </>
      )}
    </Container>
  );
};

export default IncidentList;
