import React from 'react'
import { useTranslation } from 'react-i18next'
import { dti } from '../constants/data-testid'

export type UIPropertyType = {}

export const UI: FC<UIPropertyType> = React.memo(({}) => {
  const { t } = useTranslation()

  return (
    <div data-testid={`${dti}sample`} className="">
      {t('text')}
    </div>
  )
})
