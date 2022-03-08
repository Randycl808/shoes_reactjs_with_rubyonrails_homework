import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const ShoeShow = (props)=>{

  const params = useParams()
  const{state} = useLocation()

  useEffect(()=>{
    getShoesFromProvider()
    getShoeFromAPI()
    setShoeFromRouter(state)
  },[])


  //3 ways to get shoe data
  //through our provider
  const [shoeFromDataProvider, setShoeFromDataProvider] = useState(null)
  const [shoeFromRouter, setShoeFromRouter] = useState(null)
  const [shoeFromAPI, setShoeFromAPI] = useState(null)

  const {shoes} = useContext(DataContext)


  const getShoeFromAPI = async()=>{
    try{
      let res = await axios.get(`/api/shoes/${params.id}`)
      setShoeFromAPI(res.data)
    }catch(err){
      alert('err')
    }
  }

  const getShoesFromProvider =()=>{
    let shoe= shoes.find(s => s.id === parseInt( params.id))
    setShoeFromDataProvider(shoe)
  }

  return (
    <div>
      <h1>Shoe Show</h1>
      <p>id: {params.id}</p>
      <p>shoeFromDataProvider</p>
      <code>{JSON.stringify(shoeFromDataProvider)}</code>
      <p>getShoeFromAPI</p>
      <code>{JSON.stringify(shoeFromAPI)}</code>
      <p>getShoeFromRouter</p>
      <code>{JSON.stringify(shoeFromRouter)}</code>
    </div>
  )
}

export default ShoeShow