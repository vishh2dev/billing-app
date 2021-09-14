import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Table,Button } from 'react-bootstrap'
import html2pdf from 'html2pdf.js'

import './sales.css'
import {modifyDate} from '../../helpers/sorting'


const Invoice = (props) =>{
    
 
    const [bills,products,customers] = useSelector((state) =>{
        return [state.bills.billDetails,state.products,state.customers]
    })
    
    // const handleClick = () =>{
    //     props.history.push('/bills')  
    // }

    const getcustomer = (id,identifier) =>{
        const newArr = customers.filter((ele) => ele._id === id)
        const newObj = newArr.shift()
        if(newObj){
            if(identifier === 'name'){
                return newObj.name
            }else{
                return newObj.mobile
            }
            
        }
       
    }

    const getProduct = (id) =>{
        const newArr = products.filter((ele) => ele._id === id)
        const newObj = newArr.shift()
        if(newObj){
            return newObj.name 
        }
    }

    const handlePdf =() =>{
        const element = document.getElementById('pdf')
        const opt = {
            margin:       1,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
          }
        html2pdf().set(opt).from(element).save()
    }
   
    return(
        <div className="invoicecontainer">
        <div id='pdf'>
           <h2>INVOICE</h2>
           <p style={{fontWeight:'bold'}}>Date : {modifyDate(bills.date)}</p>
           <p style={{fontWeight:'bold'}}>customer name : {getcustomer(bills.customer,'name')}</p>
           <p style={{fontWeight:'bold'}}>customer phone :{getcustomer(bills.customer,'mobile')}</p>
           <Table border="1">
                <thead>
                    <tr>
                        <th>sl No</th>
                        <th>item</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
               
                        {   
                          
                            Object.keys(bills).length > 0 && (bills.lineItems.map((ele,i) =>{
                                                                    return(
                                                                        <tr key={ele._id}>
                                                                            <td>{i+1}</td>
                                                                            <td>{getProduct(ele.product)}</td>
                                                                            <td>{ele.price}</td>
                                                                            <td>{ele.quantity}</td>
                                                                            <td>{ele.subTotal}</td>
                                                                        </tr>

                                                                    )
                                                                    
                                                                }))
                                                          
                        
                        }  
                       
                
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>{bills.total}</td>
                        </tr>
                </tbody>
            </Table>
            {/* Total -{bills.total} */}
            
           
        </div>
        
        
        <div className="mx-auto" style={{width: '200px'}}>
            <Button onClick={handlePdf} className="ml-2">generate pdf</Button>
        </div>

        <Link to="/bills">go back</Link>
        
        </div>
    )
}

export default Invoice