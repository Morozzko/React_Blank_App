import { Typography } from '@npm.piece/ui-kit'

type OwnPropertyType = {}

export const TypographyPage: FC<OwnPropertyType> = ({}) => {
  const text =
    'Lorem ipsum dolor sit amet, non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <div className="flex flex-col">
      <Typography typography="Header/h1">{text}</Typography>
      <Typography typography="Header/h6">{text}</Typography>
      <Typography typography="Caption/c1">{text}</Typography>
    </div>
  )
}
