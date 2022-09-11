import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const wkdLpPoolContract = useWkdLpPool()

  const handleStake = useCallback(
    async (amount: string) => {
      return stakeFarm(wkdLpPoolContract, pid, amount)
    },
    [wkdLpPoolContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
