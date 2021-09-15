import React, { FC } from 'react';
import UI from '../ui';
import { useContainer } from './useContainer';

const Container: FC = () => {
  const {} = useContainer();

  return <UI />;
};

export default React.memo(Container);
