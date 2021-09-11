import React,{useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Pagination from '../Pagination'
import SearchCustomer from  './SearchCustomer'
import CustomerTable from './CustomerTable'
import AddCustomer from './AddCustomer'
import './customer.css'
const CustomerContainer = (props) =>{
    const [searchTerm,setSearchTerm] = useState('')
    const [show,setShow] = useState(false)
    const [customerResult,setCustomerResult] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
    
    const startIndex = (page - 1) * 5

    const customers = useSelector((state) =>{
        return state.customers
    })

    useEffect(() =>{
        setTotalPages(Math.ceil(customers.length / 5))
        setCustomerResult(customers)
    },[customers])

    const handleSearch = (e) =>{
        const result = e.target.value
        setSearchTerm(result)
        searchFunction(result)

    }

    const searchFunction = (search) =>{
        const result = customers.filter((ele) =>{
           if(ele.name.includes(search) || ele.mobile.includes(search)){
            return ele
           }
        })
        // console.log('container',result)
        setCustomerResult(result)
    }

    const handleShow = () => setShow(true)
    
    const handleClose = () => setShow(false)

    const handlePageChange = (num) =>{
        setPage(num)
    }
    

    return(
        <div className="customercontainer">
            
            <div className="row">
                <div className="col-md-5">
                <SearchCustomer searchTerm={searchTerm} handleSearch={ handleSearch}/>
                </div>
                <div className="col-md-5">
                <SearchCustomer searchTerm={searchTerm} handleSearch={ handleSearch}/>
                </div>
                <div className="col-md-2">
                <Button onClick={handleShow} variant="primary"> + Add customer</Button>
                </div>
            </div>
               
            <h2 className="my-4 font-weight-bold-display-4">Listing Customers</h2>
           
            <CustomerTable customerResult={customerResult} startIndex={startIndex}/>
            <Pagination totalPages={totalPages} handlePageChange={handlePageChange}/>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Customer Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCustomer handleClose={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CustomerContainer