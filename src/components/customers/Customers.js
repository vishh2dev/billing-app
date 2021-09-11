import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetCustomer } from '../../actions/customerAction'
import CustomerContainer from './CustomerContainer'


const Customers = (props) =>{
   
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(startGetCustomer())
    },[])

    return(
           <CustomerContainer/>
    )
}

export default Customers