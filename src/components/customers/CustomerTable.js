import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

import EditCustomer from './EditCustomer'
import { startDeleteCustomer } from '../../actions/customerAction'
import './customer.css'
const { DateTime } = require("luxon")

const CustomerTable = (props) =>{
    const {customerResult,startIndex} = props
    const[id,setId] = useState('')
    const[show,setShow] = useState(false)

    const dispatch = useDispatch()

    const handleShow = (productId) =>{
        setShow(true)
        if(productId){
            setId(productId)
        }
        
    }

    const handleClose = () => setShow(false)

    const handleRemove = (productId) =>{
        dispatch(startDeleteCustomer(productId))
    }
    const modifyDate = (date) =>{
        const cleanDate = date.split('T')
        const dt = DateTime.fromISO(cleanDate[0])
        const humanReadable = dt.setLocale('fr').toLocaleString(dt.DATETIME_MED)
        return humanReadable
    }
   
    return(
        <div >
            <table className= "table table-bordered" >
                
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>created At</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            customerResult.slice(startIndex,startIndex + 5).map((ele,i) =>{
                                return(
                                    <tr key={ele._id}>
                                        <td>{ele.name}</td>
                                        <td>{ele.mobile}</td>
                                        <td>{modifyDate(ele.createdAt)}</td>
                                        <td><Button onClick={() =>{handleShow(ele._id)}} variant="success" > edit </Button>
                                        <Button onClick={() =>{handleRemove(ele._id)}} variant="danger"> delete </Button></td>
                                    </tr>
                                )
                            })
                        }
                        
                </tbody>
               
            </table>
             
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit customer Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCustomer handleClose={handleClose} id={id}/>  
                </Modal.Body>
            </Modal>
        
        </div>
   )
}

export default CustomerTable