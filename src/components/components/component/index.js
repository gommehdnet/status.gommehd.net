import React from "react";
import styled from "styled-components";
import Status from "./status";

const Component = styled.div`
  padding: 8px 16px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  display: flex;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ComponentCompound = ({ component }) => {
  return (
    <Component className="component">
      {component.title} <Status labels={component.labels} />
    </Component>
  );
};

export default ComponentCompound;
