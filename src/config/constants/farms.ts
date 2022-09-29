import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const CAKE_BNB_LP_MAINNET = '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WKD-BUSD LP',
    lpAddresses: {
      // eslint-disable-next-line spaced-comment
      97: '',
      56: '0x247Cd1273153BBF85a656781a815E92b422D1768',
    },
    token: serializedTokens.wkd,
    quoteToken: serializedTokens.busd,
  },
]

export default farms
