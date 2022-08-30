import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const wkdPoolContract = useWkdLpPool()

  const handleStake = useCallback(
    async (amount: string) => {
      return stakeFarm(wkdPoolContract, pid, amount)
    },
    [wkdPoolContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
