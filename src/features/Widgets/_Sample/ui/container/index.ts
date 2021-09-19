import { useActions } from '../../../../../utils/hooks/useActions';
import { Actions } from '../../model/store';
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector';
import { useEffect } from 'react';
import { UIPropertyType } from '../ui';

export const useContainer = () => {
  useEffect(() => {
  }, []);

  const {} = useActions(Actions);
  const {} = useAppSelector(state => state._Sample);

  return {} as UIPropertyType;
};
