import React, { FC } from 'react';
import Presentation from '../presentation';
import { useActions } from '../../../../utils/hooks/useActions';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { localActions } from '../reducer/reducer';

const Container: FC = () => {

  const {}=useActions(localActions)
  // const a=useAppSelector(state => state.)

  return <Presentation />;
};

export default Container;
