import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import CustomerForm from './CustomerForm'
import { startEditCustomer } from '../../actions/customerAction'

const EditCustomers = (props) =>{
    const { handleClose, id } = props

    const customers = useSelector((state) =>{
        return state.customers
    })

    const result = customers.filter((ele) => ele._id === id )
    

    const dispatch = useDispatch()
   
    
    const formSubmit = (data) =>{
    //    console.log('edit',data)
          dispatch(startEditCustomer(data,id,handleClose))
    }
    console.log(result)
    return(
        <div>
          {
                result.map((ele) =>{
                    return(
                            <CustomerForm formSubmit={formSubmit}
                                      name={ele.name}
                                      mobile={ele.mobile}
                                      mail={ele.email}
                                      key={ele._id}
                            />
                        )
                   
                    
                })
            }
        </div>
    )
}

export default EditCustomers