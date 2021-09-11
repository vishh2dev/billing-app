import React from 'react'
import { useDispatch } from 'react-redux'

import { startAddCustomer } from '../../actions/customerAction'
import CustomerForm from './CustomerForm'


const AddProduct = (props) =>{
    
    const { handleClose } = props

    const dispatch = useDispatch()
 
    
    const formSubmit = (data) =>{
        dispatch(startAddCustomer(data,handleClose))   
    }

    return(
        <div>
           
            <CustomerForm formSubmit={formSubmit}/>
        </div>
    )
}

export default AddProduct