import React from 'react'
import { useDispatch } from 'react-redux'
import { startAddProduct } from '../../actions/productAction'
import ProductForm from './ProductForm'


const AddProduct = (props) =>{
    
    const { handleClose } = props

    const dispatch = useDispatch()
 
    
    const formSubmit = (data) =>{
        dispatch(startAddProduct(data,handleClose))   
    }

    return(
        <div>
           
            <ProductForm formSubmit={formSubmit}/>
        </div>
    )
}

export default AddProduct