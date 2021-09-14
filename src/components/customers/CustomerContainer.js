import React,{useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import Pagination from '../Pagination'
import SearchCustomer from  './SearchCustomer'
import CustomerTable from './CustomerTable'
import AddCustomer from './AddCustomer'
import {sorting} from '../../helpers/sorting'
import './customer.css'

const CustomerContainer = (props) =>{
    const [searchTerm,setSearchTerm] = useState('')
    const [show,setShow] = useState(false)
    const [customerResult,setCustomerResult] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
    const [sortBy,setSortBy] = useState('')
   
    const startIndex = (page - 1) * 5

    const customers = useSelector((state) =>{
        return state.customers
    })

    useEffect(() =>{
        setTotalPages(Math.ceil(customers.length / 5))
        setCustomerResult([...customers])
    },[customers])

    
    const handleSearch = (e) =>{
        const result = e.target.value
        setSearchTerm(result)
        searchFunction(result)

    }
   
    const handleSort = (e) =>{
        const value = e.target.value
        setSortBy(value)
        let sortedArray = []
        if(value === 'Name[A-Z]'){
            sortedArray = sorting(customerResult,'name','Asc')
        } 
        else if(value === 'Name[Z-A]'){
            sortedArray = sorting(customerResult,'name','Desc')

        }else{
            sortedArray=[...customers]
        }

        setCustomerResult(sortedArray)
    }
   
    const searchFunction = (search) =>{
        const result = customers.filter((ele) =>{
           return ele.name.toLowerCase().includes(search.toLowerCase()) || ele.mobile.includes(search)
           
        })
        
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
                <select value={sortBy} onChange={handleSort}>
                    <option value="">sort customer</option>
                    <option value="Name[A-Z]">Name [A-Z]</option>
                    <option value="Name[Z-A]">Name [Z-A]</option>
                </select>
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
            </Modal>
        </div>
    )
}

export default CustomerContainer