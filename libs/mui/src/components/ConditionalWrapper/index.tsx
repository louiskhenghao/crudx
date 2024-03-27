import React from 'react';

import { Props } from './props';

const ConditionalWrapper: React.FC<Props> = (props) => {
  const { condition, wrapper, children } = props;
  return condition ? wrapper(children) : children;
};

export default ConditionalWrapper;
