// import masterchefABI from 'config/abi/masterchef.json'
import wkdLpPoolABI from 'config/abi/wkdLpPool.json'
import chunk from 'lodash/chunk'
import { multicallv2 } from 'utils/multicall'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'
import { getWkdPoolAddress } from '../../utils/addressHelpers'
import { getWkdPoolContract } from '../../utils/contractHelpers'

const wkdPoolAddress = getWkdPoolAddress()
const wkdPoolContract = getWkdPoolContract()

// export const fetchMasterChefFarmPoolLength = async () => {
//   const poolLength = await wkdPoolContract.poolLength()
//   return poolLength
// }

// const masterChefFarmCalls = (farm: SerializedFarm) => {
//   const { pid } = farm
//   return pid || pid === 0
//     ? [
//         {
//           address: wkdPoolAddress,
//           name: 'poolInfo',
//           params: [pid],
//         },
//         {
//           address: wkdPoolAddress,
//           name: 'totalRegularAllocPoint',
//         },
//       ]
//     : [null, null]
// }

// export const fetchMasterChefData = async (farms: SerializedFarmConfig[]): Promise<any[]> => {
//   const masterChefCalls = farms.map((farm) => masterChefFarmCalls(farm))
//   const chunkSize = masterChefCalls.flat().length / farms.length
//   const masterChefAggregatedCalls = masterChefCalls
//     .filter((masterChefCall) => masterChefCall[0] !== null && masterChefCall[1] !== null)
//     .flat()
//   const masterChefMultiCallResult = await multicallv2(wkdLpPoolABI, masterChefAggregatedCalls)
//   const masterChefChunkedResultRaw = chunk(masterChefMultiCallResult, chunkSize)
//   let masterChefChunkedResultCounter = 0
//   return masterChefCalls.map((masterChefCall) => {
//     if (masterChefCall[0] === null && masterChefCall[1] === null) {
//       return [null, null]
//     }
//     const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter]
//     masterChefChunkedResultCounter++
//     return data
//   })
// }

export const fetchWkdLpPoolFarmPoolLength = async () => {
  const poolLength = await wkdPoolContract.poolLength()
  return poolLength
}

const wkdLpPoolFarmCalls = (farm: SerializedFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: wkdPoolAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: wkdPoolAddress,
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
