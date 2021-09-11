import React,{ useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { startGetCustomer } from '../../actions/customerAction'
import { startGetProduct } from '../../actions/productAction'
import { startGetAllBill } from '../../actions/billAction'

import './dashboard.css'

const Dashboard = (props) =>{
    const dispatch = useDispatch()
    
    // useEffect(()=>{
    //    dispatch(startGetCustomer())
    //    dispatch(startGetProduct())
    //    dispatch(startGetAllBill())
    // },[])


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
            <div className="dashboardcontainer">
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
            </div>
       
    )
}

export default Dashboard