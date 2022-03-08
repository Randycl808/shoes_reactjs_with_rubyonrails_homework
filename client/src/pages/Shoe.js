import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const Shoe = (props)=>{
  const {deleteShoe} = useContext (DataContext)
  const navigate = useNavigate()
  const {id, text, brand, stars} = props
  return (
    <div className='border'>
      <h1>Shoe {id}</h1>
      <p>{brand}</p>
      <p>Stars:{stars}/5</p>
      <div style={{display:'flex', justifyContent:'space-around'}}>
      <button onClick={()=>navigate(`/shoes/${id}/edit`)}>edit</button>
      <button onClick={()=>deleteShoe(id)}>delete</button>
      <button onClick={()=>navigate(`/shoes/${id}`, {state: {id, text,stars, brand}})}>show</button>
    </div>
    </div>
  )
}

export default Shoe