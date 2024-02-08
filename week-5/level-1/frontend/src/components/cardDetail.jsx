import React, { useState } from 'react';
import axios from 'axios';


export default function CardDetails() {
    const [data, setData] = useState({});
    async function handleSubmitBTN(){
        await axios.post('http://localhost:3000/new',data).then((res)=>{
            const data=res.data;
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <form onSubmit={handleSubmitBTN} style={{display:"flex",flexDirection:"column"}}>
            <input type="text" placeholder="Enter your Name" onChange={(e)=>{setData({...data,name:e.target.value})}}/>
            <input type="text" placeholder="Enter Description" onChange={(e)=>{setData({...data,description:e.target.value})}}/>
            <input type="text" placeholder="Enter your Interest" onChange={(e)=>{setData({...data,interest:e.target.value})}}/>
            <input type="text" name="" placeholder="Enter your Linkedin URL" id="" onChange={(e)=>{setData({...data,linkedin:e.target.value})}}/>
            <input type="text" name="" placeholder="Enter your Twitter URL" id="" onChange={(e)=>{setData({...data,twitter:e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}