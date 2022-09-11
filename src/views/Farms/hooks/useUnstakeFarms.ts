import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const wkdLpPoolContract = useWkdLpPool()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(wkdLpPoolContract, pid, amount)
    },
    [wkdLpPoolContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
