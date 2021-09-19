import React from 'react'
import { useSelector } from 'react-redux'


import './dashboard.css'

const InfoContainer = (props) =>{
   


    const [customers,products,bills] = useSelector((state) =>{
        return [state.customers,state.products,state.bills.bills]
    })
   
    const totalIncome = () =>{
        if(bills){
            let total = 0
        bills.forEach((bill) =>{
            total += bill.total
        })
        return total
        }
        
    }
    
    return(
           
            <div className="dashboard">
                <div className="dashboardItem">
                    <span className="dashboardTitle"> Total Customer</span>
                    <div className="dashboardInfoContainer">
                        <span className="dashboardInfo"> {customers.length} </span>
                    </div>
                </div>

                <div className="dashboardItem">
                    <span className="dashboardTitle"> Total Product</span>
                    <div className="dashboardInfoContainer">
                        <span className="dashboardInfo"> {products.length} </span>
                    </div>
                </div>

                <div className="dashboardItem">
                    <span className="dashboardTitle"> Total Bills</span>
                    <div className="dashboardInfoContainer">
                        <span className="dashboardInfo"> {bills && bills.length} </span>
                    </div>
                </div>
                <div className="dashboardItem">
                    <span className="dashboardTitle"> Total Income</span>
                    <div className="dashboardInfoContainer">
                        <span className="dashboardInfo"> {totalIncome()} </span>
                    </div>
                </div>
             
            </div>  
        
    )
}

export default InfoContainer