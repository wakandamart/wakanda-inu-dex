// import masterchefABI from 'config/abi/masterchef.json'
import wkdLpPoolABI from 'config/abi/wkdLpPool.json'
import chunk from 'lodash/chunk'
import { multicallv2 } from 'utils/multicall'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'
import { getWkdLpPoolAddress } from '../../utils/addressHelpers'
import { getWkdLpPoolContract } from '../../utils/contractHelpers'

const wkdLpPoolAddress = getWkdLpPoolAddress()
const wkdLpPoolContract = getWkdLpPoolContract()

export const fetchWkdLpPoolFarmPoolLength = async () => {
  const poolLength = await wkdLpPoolContract.poolLength()
  return poolLength
}

const wkdLpPoolFarmCalls = (farm: SerializedFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: wkdLpPoolAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: wkdLpPoolAddress,
          name: 'totalRegularAllocPoint',
        },
      ]
    : [null, null]
}

export const fetchwkdLpPoolData = async (farms: SerializedFarmConfig[]): Promise<any[]> => {
  const wkdLpPoolCalls = farms.map((farm) => wkdLpPoolFarmCalls(farm))
  const chunkSize = wkdLpPoolCalls.flat().length / farms.length
  const masterChefAggregatedCalls = wkdLpPoolCalls
    .filter((masterChefCall) => masterChefCall[0] !== null && masterChefCall[1] !== null)
    .flat()
  const masterChefMultiCallResult = await multicallv2(wkdLpPoolABI, masterChefAggregatedCalls)
  const masterChefChunkedResultRaw = chunk(masterChefMultiCallResult, chunkSize)
  let masterChefChunkedResultCounter = 0
  return wkdLpPoolCalls.map((masterChefCall) => {
    if (masterChefCall[0] === null && masterChefCall[1] === null) {
      return [null, null]
    }
    const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter]
    masterChefChunkedResultCounter++
    return data
  })
}
