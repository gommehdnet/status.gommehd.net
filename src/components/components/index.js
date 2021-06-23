import React from "react";
import Skeleton from "./skeleton";
import Component from "./component";
import useDidMount from "../useDidMount";
import l10n from '../../language';

const ComponentList = ({ loading, components }) => {
  const [hasMounted] = useDidMount();

  return !loading || hasMounted ? (
    components?.length > 0 ? (
      components?.map((component) => (
        <Component key={component.id} component={component} />
      ))
    ) : (
      <p>{l10n.error.nocomponents}</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};

export default ComponentList;