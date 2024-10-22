import React from 'react'

type RandomNumberType = {
    value : number
}

type PositiveNumner = RandomNumberType &{
    isPositive: boolean
    isNegative?:never
    isZero?: never
}
type NegativeNumber = RandomNumberType &{
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumber = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNumner | NegativeNumber | ZeroNumber

const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
  }: RandomNumberProps) => {
  return (
    <div className='mt-4 ml-4'>
        <h1 className='text-lg font-bold'>Restricted props</h1>
        <div>
            {value} {isPositive && 'postive'} {isNegative && 'Negative'} {''}
            {isZero && 'zero'}
        </div>
    </div>
  )
}

export default RandomNumber