import React, { FC } from 'react';
import { useContainer } from './container';
import UI from './ui';

const Container: FC = () => <UI {...useContainer()} />

export default React.memo(Container);
