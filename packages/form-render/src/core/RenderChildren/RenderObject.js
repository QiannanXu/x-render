import React from 'react';
import Core from '../index';

// TODO: nanoId 好像没啥用
const RenderObject = ({ children = [], dataIndex = [], displayType }) => {
  return (
    <>
      {children.map((child, i) => {
        const FRProps = {
          displayType,
          id: child,
          dataIndex,
        };
        return <Core key={i.toString()} {...FRProps} />;
      })}
    </>
  );
};

export default RenderObject;
