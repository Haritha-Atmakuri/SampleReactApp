import React, { useEffect, useState } from 'react';
import axios from 'axios'
import  './style.css'
import history from './history';
import { useHistory } from "react-router-dom";
import Resuable from './Resuable'



function List() {
    const [items,setItems]= useState([]);
    let history = useHistory();
    useEffect(()=>{
        axios.get(`/api/Indicator`).then(res=>{
            console.log(res);
            setItems(res.data.value)
        })
        
    },
    []);

    // const fetchDetails=(item)=>{
        
    //     console.log('getting details for a',item);
    //     history.push(`/dimensions/${item.IndicatorName}`)
    // }
    // const handleData=()=>{
    //     return items.map((item,index)=>{
    //         return   <tr  key= {index} onClick={()=>fetchDetails(item)}>
    //             <td>{item.IndicatorCode}</td>
                
    //             <td>{item.IndicatorName}</td>
    //             <td>{item.Language}</td>
    //         </tr>

    //    })
        
        
    // }
    const handlingData=(value)=>{
        console.log(value);
        history.push(`/dimensions/${value.IndicatorName}`)
    }
  return (
    <div className="space">
        
        <Resuable item={items} haa={(e)=>handlingData(e)}/>
    <h1>List PAGE</h1>
    </div>
  );
}

export default List;
