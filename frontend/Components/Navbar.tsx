import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
        <div className='flex justify-between hover:cursor-pointer items-center border-b-2 border-b-slate-900 p-4 '>
            <div className='flex gap-4'>
                <h1>Exchange</h1>
                <p>Markets</p>
                <p>Trade</p>
            </div>
            <div className='flex gap-4'>
                <h3>Deposit</h3>
                <h3>Witdraw</h3>
            </div>
        </div>
    </>
  )
}