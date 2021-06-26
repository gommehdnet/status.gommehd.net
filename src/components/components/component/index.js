import React, { useState } from "react";
import styled from "styled-components";
import Status from "./status";
import Collapse from "react-collapse";
import useChildren from "../useChildren";

const Component = styled.div`
  padding: 8px 16px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  display: flex;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`

const ComponentCompound = ({ component, components }) => {
  const [isCollapseOpen, setCollapseOpen] = useState(false);
  let rawChildren = useChildren(component, components);

  if (component.labels.find((v) => v.name === 'subcomponent')) {
    return null; // don't include subcomponents here
  }

  if (rawChildren?.length > 0) {
    let children = rawChildren?.map((v) => <Component className="component collapsed">
      {v.title.split(':')[1]} <Status labels={v.labels} />
    </Component>);
    return (<>
      <Component onClick={() => setCollapseOpen(!isCollapseOpen)} className="component children">
        <span>{component.title} <span className="component-dropdown">{isCollapseOpen ? "▲" : "▼"}</span></span> <Status labels={component.labels} />
      </Component>
      <Collapse theme={{ collapse: 'collapse-component', content: 'collapse-content' }} isOpened={isCollapseOpen}>
        {children}
      </Collapse>
    </>);
  }
  return (
    <Component className="component">
      {component.title} <Status labels={component.labels} />
    </Component>
  );
};

export default ComponentCompound;
