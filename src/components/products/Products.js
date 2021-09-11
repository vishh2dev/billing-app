import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { startGetProduct } from '../../actions/productAction'
import ProductContainer from './ProductContainer'

const Products = (props) =>{

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(startGetProduct())
    },[])

    
    return(
        <ProductContainer/>
    )
}

export default Products