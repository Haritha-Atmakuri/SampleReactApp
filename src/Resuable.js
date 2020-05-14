import React, { useState, useEffect } from 'react';
import './style.css'




function Resuable(props) {
    const [value, setValue] = useState([])

    useEffect(() => {
        setValue(props.item)
        console.log(props)
    }, [props]);

    const fetchDetails = (item) => {

        console.log('getting details for a', item);

        props.haa(item)

    }
    const handleData = () => {
        return value.map((item, index) => {
            return <tr key={index} onClick={() => fetchDetails(item)}>
                <td>{item.IndicatorCode}</td>

                <td>{item.IndicatorName}</td>
                <td>{item.Language}</td>
            </tr>

        })
    }
    const searchFunctionality = (e) => {

        let filteringData = props.item.filter(
            (item) => {
                return item.IndicatorName.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1;
            });
        setValue(filteringData)

    }
    const Sorting = (val) => {
        const values = value;
        values.sort((a, b) => {
            if (a[val] < b[val]) {
                return -1;
            }
            if (a[val] > b[val]) {
                return 1;
            }
            return 0;
        }
        )
        setValue(values.slice(0,values.length-1))
    }
    return (
        <div className="space">
            <input className="rightSide" type="text" onChange={(e) => searchFunctionality(e)} />
           {value[0] && value[0]['IndicatorName']}
            <table >
                <thead>
                    <tr>
                        <th onClick={() => Sorting('IndicatorCode')}>IndicatorCode</th>
                        <th onClick={() => Sorting('IndicatorName')}>IndicatorName</th>
                        <th onClick={() => Sorting('Language')}>Language</th>
                    </tr>
                </thead>
                <tbody>
                    {handleData()}
                </tbody>
            </table>


        </div>

    )

}
export default Resuable;