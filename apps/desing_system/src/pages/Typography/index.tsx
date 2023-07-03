import { Typography } from '@npm.piece/ui-kit'

type OwnPropertyType = {}

export const TypographyPage: FC<OwnPropertyType> = ({}) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <div className="flex flex-col">
      <Typography typography="Header/h1">{text}</Typography>
      <Typography typography="Header/h6">{text}</Typography>
      <Typography typography="Caption/c1">{text}</Typography>
    </div>
  )
}
