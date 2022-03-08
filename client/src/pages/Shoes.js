import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import Shoe from './Shoe'

const Shoes = (props)=>{
  const {shoes} = useContext(DataContext)
  useEffect(()=>{
    //runs when page loads
    console.log('Facts loaded')
},[])
    const renderShoes =()=>{
      return shoes.map((s)=>{
       return <Shoe key={s.id}{...s}/>
      })
    }
  return (
    <div className='border'>
      <h1>Shoes</h1>
      <div className='border'>
        <code>{renderShoes()}</code>
      </div>
      <div className='border'>
        <code>{JSON.stringify(shoes)}</code>
      </div>
    </div>
  )
}

export default Shoes