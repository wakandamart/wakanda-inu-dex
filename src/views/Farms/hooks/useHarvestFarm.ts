import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const wkdPoolContract = useWkdLpPool()

  const handleHarvest = useCallback(async () => {
    return harvestFarm(wkdPoolContract, farmPid)
  }, [farmPid, wkdPoolContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
