import React from 'react'
import { useTranslation } from 'react-i18next'
import { dti } from '../../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'sample',
}

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(({}) => {
  const { t } = useTranslation()

  return <div data-testid={`${dti}${dtiDictionary.mainDiv}`}>{t('text')}</div>
})
