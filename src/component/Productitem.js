import React, { useEffect } from 'react';
import productinfo from '../data/products.json'

export default function Productitem() {
  
  useEffect(()=>{
    console.log(productinfo)
  }, [])

  return (
     <div>Productitem</div>
  )
}
