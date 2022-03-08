import React, { useEffect, useState } from "react";
import axios from 'axios'

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [shoes, setShoes] = useState([]);
  //on LOADING I want to get Shoes

  useEffect(()=>{
      //runs when page loads
      console.log('DataProvider loaded')
      getShoes()
  },[])

  const getShoes = async()=>{
    try {
      let res = await axios.get('/api/shoes')
      console.log(res)
      setShoes(res.data)
    } catch(err){
      alert('err getting shoes')
    }
  }
  //DELETE
  //remove from front-end & back-end
  //hook up delete button
  const deleteShoe = async(id) => {
    try{
      //step 1- delete from API
      let res = await axios.delete(`/api/shoes/${id}`)
      //step 2- delete from front-end
      let filteredShoes = shoes.filter(s => s.id !== id)
      setShoes(filteredShoes)
    }catch(err){
      alert('err in delete')
    }
  }

  // create an object that will be 'global state'
  const shoeProviderThing = {
    getShoes,
    deleteShoe,
    shoes
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={shoeProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
