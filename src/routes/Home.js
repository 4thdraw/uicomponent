import React from 'react'
import { Uimenu } from '../commonui/uimenu'

export default function Home() {
  return (
    <div>
       <div className='d-flex gap-3'>
        <Uimenu  className='bg0'><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu  className='bg1'><span className='d-block mt-2'>이벤트</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
      </div>
    </div>
  )
}
