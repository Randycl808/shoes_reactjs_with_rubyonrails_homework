import React, { useEffect } from 'react'

const ShoeForm = (props)=>{
  useEffect(()=>{
    //runs when page loads
    console.log('ShoeForm loaded')
},[])

  return (
    <div>
      <h1>Shoe Form</h1>
    </div>
  )
}

export default ShoeForm