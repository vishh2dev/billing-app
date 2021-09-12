import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import html2pdf from 'html2pdf.js'

import './sales.css'

const Invoice = (props) =>{
    
 
    const [bills,products] = useSelector((state) =>{
        return [state.bills.billDetails,state.products]
    })
    
    const handleClick = () =>{
        props.history.push('/bills')  
    }

    const handlePdf =() =>{
        const element = document.getElementById('pdf')
        html2pdf(element)
    }

    return(
        <div className="invoicecontainer">
        <div id='pdf'>
           <h2>INVOICE</h2>
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
                                                                            <td>{ele.product}</td>
                                                                            <td>{ele.price}</td>
                                                                            <td>{ele.quantity}</td>
                                                                            <td>{ele.subTotal}</td>
                                                                        </tr>

                                                                    )
                                                                    
                                                                }))
                                                          
                        
                        }  
                       
                </tbody>
                
            </Table>
            Total -{bills.total}
            
           
        </div>
        <button onClick={handleClick}>ok</button>
            <button onClick={handlePdf}>generate pdf</button>
        </div>
    )
}

export default Invoice