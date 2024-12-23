import React from 'react'
import { Flex } from '@npm.piece/ui-kit'
import { clsx } from '@npm.piece/utils'
import { dti } from '../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'UI',
}

export type UIPropertyType = {
  t: Callback<string, string>
}

export const UI: FC<UIPropertyType> = React.memo(({ t }) => (
  <Flex data-testid={`${dti}${dtiDictionary.mainDiv}`} className={clsx('')}>
    {t('text')}
  </Flex>
))
