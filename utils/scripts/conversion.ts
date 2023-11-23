import { ethers } from 'ethers'


export function fromReadableAmount(
  amount: number,
  decimals: number
)  {
  return ethers.parseUnits(amount.toString(), decimals)
}

export function toReadableAmount(rawAmount: number, decimals: number): string {
  return ethers
    .formatUnits(rawAmount, decimals)
}