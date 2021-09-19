import React from 'react'
import { useSelector } from 'react-redux'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import './chart.css'

const { DateTime } = require("luxon")

const Chart = (props) =>{
    const obj={'Jan':0,'Feb':0,'Mar':0,'Apr':0,'May':0,'Jun':0,'Jul':0,'Aug':0,'Sep':0,'Oct':0,'Nov':0,'Dec':0}
    const bills = useSelector((state) =>{
        return state.bills.bills
    })
    
    const dateToMonth = (date) =>{
        const cleanDate = date.split('T')
        const dt = DateTime.fromISO(cleanDate[0])
        return dt.toLocaleString({ month: 'short' })
        
    }

    const data = []
     bills.forEach((ele) =>{
         if(!obj.hasOwnProperty(dateToMonth(ele.date))){
            obj[dateToMonth(ele.date)] = 1
         }else{
            //  console.log(ele.lineItems[0].subTotal)
            obj[dateToMonth(ele.date)] =  obj[dateToMonth(ele.date)] + 1
         }
     })
     Object.keys(obj).forEach(ele =>{
         data.push({name:ele,TotalSales:obj[ele]})
     })
    // console.log('chart',obj);
    // console.log('chart',data);
    
    return(
        <div className="chart">
           <h3 className="chartTitle">Sales Analytics</h3>
                <LineChart width={1000} height={300} data={data} 
                             margin={{ left: 15 ,right:5}}
                >
                <XAxis dataKey="name" />
                <Line type="monotone" dataKey='TotalSales' stroke="#5550bd" />
                <Tooltip />
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
        </div>
    )
}

export default Chart