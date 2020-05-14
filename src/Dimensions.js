import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Resuable from './Resuable';


function Dimensions(data) {
  const [item,setItem]= useState([]);
  const[error,setError]=useState(null);
    let history = useHistory();
    useEffect(()=>{
        axios.get(`/api/Indicator?$filter=contains(IndicatorName,'${data.match.params.id}')`).then(res=>{
            console.log(res);
            setItem(res.data.value)
        }).catch(error=>{
          setError("something is missing please try other indicator")
        })
        
    },
    []);
    const handlingError=()=>{
      console.log('errory try again');
  }
    
    
  
  return (
    <div >
      {item.length>0  ?<Resuable item={item} haa={()=>handlingError()}/>
        : <div>{error}</div>}
    </div>
  );
}

export default Dimensions;
