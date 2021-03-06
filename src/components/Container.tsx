import React from 'react';

const Container: React.FC = props => {
  return <div className="container mx-auto px-4 my-4">{props.children}</div>;
};

export default Container;
