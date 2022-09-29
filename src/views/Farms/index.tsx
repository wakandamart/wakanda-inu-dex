import { Text } from '@pancakeswap/uikit'
import { FC } from 'react'
import Farms, { FarmsContext } from './Farms'

export const FarmsPageLayout: FC = ({ children }) => {
  // return <Farms>{children}</Farms>

  return (
    <Farms>
      <Text textAlign="center" mx="auto">
        Coming soon...
      </Text>
    </Farms>
  )
}

export { FarmsContext }
