import React, { FC } from 'react';
import UI from '../ui';
import { useActions } from '../../../../utils/hooks/useActions';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { localActions } from '../model';

const Container: FC = () => {
  const {} = useActions(localActions);
  // const a=useAppSelector(state => state.)

  return <UI />;
};

export default Container;
