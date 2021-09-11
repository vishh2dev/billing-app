import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

const CustomerTableForSales = (props) =>{
    const { handleClose, getCustomer } = props
    
    const customers = useSelector((state) =>{
        return state.customers
    })

    const handleAdd = (id) =>{
       const selectedCustomer = customers.filter((customer) => customer._id === id)
       getCustomer(selectedCustomer.shift())
       handleClose()
    }
    
    return(
        <div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            customers.map((ele,i) =>{
                                return(
                                    <tr key={ele._id}>
                                        <td>{ele.name}</td>
                                        <td>{ele.mobile}</td>
                                        <td><button onClick={() =>{handleAdd(ele._id)}}  > Add </button></td>
                                        
                                    </tr>
                                )
                            })
                        }
                        
                </tbody>
                
            </Table>
             
        </div>
    )
}

export default CustomerTableForSales