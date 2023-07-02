import { SizeType, VariantType } from '@utils/types'
import { ReactNode, FC } from 'react'

type OwnPropertyType = {
  children: (size: SizeType, variant: VariantType) => ReactNode
}

export const Atom: FC<OwnPropertyType> = ({ children }) => {
  const sizes: SizeType[] = ['s', 'm', 'l']
  const variants: VariantType[] = ['filled', 'outlined', 'text']

  return (
    <table className="w-full table-fixed text-center">
      <thead>
        <tr>
          {variants.map(variant => (
            <th key={variant}>{variant}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map(size => (
          <tr key={size}>
            {variants.map(variant => (
              <td key={variant} className="items-center border">
                {children(size, variant)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
