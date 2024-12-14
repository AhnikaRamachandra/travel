import React from 'react'
import { Button } from '../ui/button'
function Header() {
  return (
    <div className='p-2 shadow-sm justify-between flex items-center '>
      <img className='h-14  ' src="/logo.png" alt="" srcset="" />
       <Button className='bg-cyan-700 p-3 mx-1'>Sign in</Button>
    </div>
  )
}

export default Header
