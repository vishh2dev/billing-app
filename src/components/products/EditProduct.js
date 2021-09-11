import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import ProductForm from './ProductForm'
import { startEditProduct } from '../../actions/productAction'

const EditProduct = (props) =>{
    const { handleClose, id } = props

    const products = useSelector((state) =>{
        return state.products
    })

    const result = products.filter((ele) => ele._id === id )
    

    const dispatch = useDispatch()
   
    
    const formSubmit = (data) =>{
    //    console.log('edit',data)
          dispatch(startEditProduct(data,id,handleClose))
    }

    return(
        <div>
          {
                result.map((ele) =>{
                    return(
                            <ProductForm formSubmit={formSubmit}
                                      name={ele.name}
                                      price={ele.price}
                                      key={ele._id}
                            />
                        )
                   
                    
                })
            }
        </div>
    )
}

export default EditProduct