import { useState } from 'react'
import axios from 'axios'


import './App.css'
import CardDetails from './components/cardDetail'
import { useEffect } from 'react'
import Card from './components/card'

 function App() {
  const [data,setData]=useState();
   useEffect( () => {
    async function fetchData(){
      await axios.get('http://localhost:3000/all').then((res)=>{
        const datas=res.data;
        setData(datas);
      }).catch((err)=>{
        console.log(err);
      });
    }
    fetchData();
   }, [])
  
   console.log("data",data);
  return (
    <>
      <CardDetails/>

      <div>
        {data && data.map((item,index)=>{
          return(
            <Card key={index} id={item._id} title={item.name} description={item.description} twitter={item.twitter} linkedin={item.linkedin} interest={item.interest}/>
          )
        })}
      </div>
    </>
  )
}

export default App
