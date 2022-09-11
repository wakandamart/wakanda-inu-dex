import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const wkdLpPoolContract = useWkdLpPool()

  const handleHarvest = useCallback(async () => {
    return harvestFarm(wkdLpPoolContract, farmPid)
  }, [farmPid, wkdLpPoolContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
