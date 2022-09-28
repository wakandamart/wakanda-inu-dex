import { BigNumber } from '@ethersproject/bignumber'
import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 1,
    stakingToken: serializedTokens.wkd,
    earningToken: serializedTokens.wkd,
    contractAddress: {
      97: '',
      56: '0xb0c95c9AeC13ba330bA9f85177673eD03C05A9Cc',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '308641',
    isFinished: false,
  },
]

// known finished pools
const finishedPools = [].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
