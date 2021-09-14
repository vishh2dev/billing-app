import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Table,Button } from 'react-bootstrap'
import { withRouter } from 'react-router'

import { startDeleteBill } from '../../actions/billAction'
import { startGetSingleBill } from '../../actions/billAction'

import './bills.css'


const { DateTime } = require("luxon")

const BillsTable = (props) =>{
  
    const dispatch = useDispatch()
   
    const [bills,customers]=useSelector((state) =>{
        return [state.bills.bills,state.customers]
    })


    const modifyDate = (date) =>{
        const cleanDate = date.split('T')
        const dt = DateTime.fromISO(cleanDate[0])
        const humanReadable = dt.setLocale('fr').toLocaleString(dt.DATETIME_MED)
        return humanReadable
    }

    const getcustomer = (id) =>{
        const newArr = customers.filter((ele) => ele._id === id)
        const newObj = newArr.shift()
        if(newObj){
            return newObj.name 
        }
    }

    
    const handleDelete = (id) =>{
        dispatch(startDeleteBill(id))
    }

    const handleView =(id)=>{
        dispatch(startGetSingleBill(id))
        props.history.push(`/invoice/${id}`)
    }
 
    return(
        <div >
            <div className="row">
            <div className="col-md-5">
                <h2 className=" font-weight-bold-display-4">All bills</h2>
            </div>
           
            </div>
            <div className="mt-5">
            { bills.length > 0  ?(
                                <Table className= "table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>date</th>
                                            <th>customer</th>
                                            <th>total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                            {   
                                                
                                                        bills.map((ele,i) =>{
                                                            return(
                                                                <tr key={ele._id}>
                                                                    <td>{i+1}</td>
                                                                    <td>{modifyDate(ele.date)}</td>
                                                                    <td>{getcustomer(ele.customer)}</td>
                                                                    <td>{ele.total}</td>
                                                                    <td> 
                                                                        <Button onClick={() => handleView(ele._id)} variant="success">view</Button>
                                                                        <Button onClick={() => handleDelete(ele._id)} variant="danger">delete</Button> 
                                                                    </td>
                                                                    
                                                                </tr>
                                                            )
                                                        })
                                                        
                                                        
                                            } 
                                            
                                    </tbody>
                                
                                </Table>
                                ):<h4 className="my-4 font-weight-bold-display-4">No bills to show</h4>
            
        
            }
            </div>
          
        </div>
    )
}

export default withRouter(BillsTable)