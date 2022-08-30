import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const wkdPoolContract = useWkdLpPool()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(wkdPoolContract, pid, amount)
    },
    [wkdPoolContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
