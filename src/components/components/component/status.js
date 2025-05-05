import React from "react";
import styled from "styled-components";
import useStatus from "./useStatus";

const Status = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: 0.3s;
`;

const StatusCompound = ({ labels }) => {
  const [status] = useStatus(labels);

  return (
    <Status className={`component-status ${status?.name.toLowerCase().replace(' ', '')}`} backgroundColor={status?.backgroundColor}>
      {status?.locName}
    </Status>
  );
};

export default StatusCompound;
