import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"
import { BsFillPersonFill } from "react-icons/bs"
import {RiDeleteBack2Line} from "react-icons/ri"
import CustomerTableForSales from './CustomerTableForSales'
import ProductTableForSales from './ProductTableForSales'
import { startCreateBill } from '../../actions/billAction'
import { startGetSingleBill } from '../../actions/billAction'
import './sales.css'

const Sales = (props) =>{
    // const[toggle,setToggle] = useState(false)
    const [show,setShow] = useState(false)
    const [customer,setCustomer] = useState('Add customer')
    const [products,setProducts] = useState([])
    const [productDetails,setProductDetails] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const handleShow = () => setShow(true)
        
    const handleClose = () => setShow(false)

    const getCustomer = (customer) =>{
        setCustomer(customer)
    }
    
    const getProduct = (product) =>{
        const obj = {...product,'quantity':1}
        setProducts([...products,obj])

        const sampleLineItems = {'product':product._id,'quantity':1}
        setProductDetails([...productDetails,sampleLineItems])
        
    }

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
      }

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      };
   
    const handleIncrease = (id) =>{
       const newArr = products.map((ele) =>{
            if(ele._id === id){
                return {...ele,quantity:ele.quantity+1}
            }else{
                return{...ele}
            }
        })
        
        const newAr = productDetails.map((ele) =>{
            if(ele.product === id){
                return {...ele,quantity:ele.quantity+1}
            }else{
                return{...ele}
            }
        })
        setProductDetails(newAr)
        setProducts(newArr)  
        
    }

    const handleDecrease = (id) =>{
        const newArr = products.map((ele) =>{
             if(ele._id === id){
                 return {...ele,quantity:ele.quantity-1}
             }else{
                 return{...ele}
             }
         })
         
         const newAr = productDetails.map((ele) =>{
             if(ele.product === id){
                 return {...ele,quantity:ele.quantity-1}
             }else{
                 return{...ele}
             }
         })
         setProductDetails(newAr)
         setProducts(newArr)  
         
     }

    const handleDelete = (id) =>{
        const newArr = products.filter((ele) =>{
           return ele._id !== id
        })
        
        const newAr = productDetails.filter((ele) =>{
           return ele.product !== id
        })
        setProductDetails(newAr)
        setProducts(newArr)  
    }

    const priceCalculation = (quantity,price) =>{
        const sum = quantity * price
        return sum
    }

    const total = () =>{
        let total = 0
        products.forEach((product) =>{
            total += product.price * product.quantity
        })
        return total
    }

    const getDate = (startDate) =>{
        const date = startDate.toLocaleString().split(', ').shift()
        return date
    }

    const redirect = (id) =>{
        dispatch(startGetSingleBill(id))
        props.history.push(`/invoice/${id}`)
    }
    
    const generateBill = () =>{
        const billData = {
            date : getDate(startDate),
            customer : customer._id,
            lineItems :productDetails
        }
       
        dispatch(startCreateBill(billData,redirect)) 

    }

    const format = (d) =>{
        let month = "" + (d.getMonth() + 1)
        let day = "" + d.getDate()
        let year = d.getFullYear()
       
        if (month.length < 2) month = "0" + month
        if (day.length < 2) day = "0" + day
       
        return [month, day, year].join("/")
    }
  
    return(
        <div className="salescontainer">
            <div className="row">
                <div className="col-md-5">

                    <div className="row">
                        <div className="col-md-4">
                        <Button className="example-custom-input" onClick={handleClick} variant="success" >
                        {format (startDate)}
                        </Button>
                            {isOpen && (
                                <DatePicker selected={startDate} onChange={handleChange} format='yyyy-MM-dd' inline />
                            )}
                        </div>
                        <div className="col-md-1">
                            <BsFillPersonFill/>
                        </div>
                       
                        <div className="col-md-2">
                            {
                                typeof(customer) == 'object' ?  <Button onClick={handleShow} style={{width:'150px' }} variant="light" > customer-{customer.name} </Button>
                                                                :  <Button onClick={handleShow} style={{width:'150px' }} > {customer} </Button>
                            }
                       
                        </div>
                       
                    </div>
                    
                    <div className="mt-3">
                    {
                        products.map((ele) =>{
                        return (
                                <div key={ele._id}>
                                    {ele.name}
                                    <div className="row">
                                        <div className="col-md-7">
                                            <button onClick={() =>{handleIncrease(ele._id)}} >+</button>
                                            {ele.quantity}
                                            <button onClick={() =>{handleDecrease(ele._id)}} disabled={ele.quantity === 1} >-</button> x {ele.price}
                                        </div>
                                        <div className="col-md-4">
                                            <span> {priceCalculation(ele.quantity,ele.price)}</span>
                                        </div>
                                        <div className="col-md-1">
                                            <RiDeleteBack2Line onClick={() =>{handleDelete(ele._id)}} style={{cursor:'pointer'}}/>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                        )
                        })
                    }
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                        <h5>Total</h5>       
                        </div>
                        <div className="col-md-5">
                        {total()}
                        </div>
                    </div>
                   
                    
                    <div className="mt-2">
                    {
                        products.length > 0 &&  <Button onClick={generateBill}>Generate</Button>
                    }
                    </div>
                </div>

                <div className="col-md-7">
                    <ProductTableForSales getProduct={getProduct}/>
                </div>
                    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            select customer
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CustomerTableForSales handleClose={handleClose} getCustomer={getCustomer}/>   
                    </Modal.Body>
                    </Modal>
            </div>
        </div>   
    )
}

export default Sales