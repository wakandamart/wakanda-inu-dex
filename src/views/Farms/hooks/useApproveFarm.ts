import { useCallback } from 'react'
import { MaxUint256 } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { useMasterchef, useWkdLpPool } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'

const useApproveFarm = (lpContract: Contract) => {
  const wkdLpPoolContract = useWkdLpPool()
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return callWithGasPrice(lpContract, 'approve', [wkdLpPoolContract.address, MaxUint256])
  }, [lpContract, wkdLpPoolContract, callWithGasPrice])

  return { onApprove: handleApprove }
}

export default useApproveFarm
