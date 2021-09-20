import React from 'react'

import dashImg from '../../assests/dashboard.png'
import customerImg from '../../assests/customer.png'
import productImg from '../../assests/product.png'
import posImg from '../../assests/pos.png'
import invoiceImg from '../../assests/invoice.png'
import billImg from '../../assests/bills.png'
const Features = (props) =>{
    return(
        <>
            <div className="container mt-5"> 
                <div className="row">
                    <div className="col-md-5">
                        <h2>Dashboard</h2>
                        <p>Keep track of all the customers,products and sales.It is also provided with line chart for  total sales of each month</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid w-200" src={dashImg}></img>
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="container mt-5"> 
                <div className="row">
                    <div className="col-md-7">
                        <img className="img-fluid w-200" src={customerImg}></img>
                    </div>

                    <div className="col-md-5">
                        <h2>Customers Data</h2>
                        <p>We can add customers and their relevant information with search and sort fuctionality</p>
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="container mt-5"> 
                <div className="row">
                    <div className="col-md-5">
                        <h2>Product Data</h2>
                        <p>We can add products and their relevant information with search and sort fuctionality</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid w-200" src={productImg}></img>
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="container mt-5"> 
                <div className="row">
                    <div className="col-md-7">
                        <img className="img-fluid w-200" src={posImg}></img>
                    </div>

                    <div className="col-md-5">
                        <h2>POS</h2>
                        <p>We have provided a pos with easy access of products and also with a search functionality</p>
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="container mt-5"> 
                <div className="row">
                    <div className="col-md-5">
                        <h2>Invoice</h2>
                        <p>Invoice with the customer name and phone with the details of the total purchase and a download it as pdf functionality</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid w-200" src={invoiceImg}></img>
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="container mt-5"> 
                <div className="row">
                    <div className="col-md-7">
                        <img className="img-fluid w-200" src={billImg}></img>
                    </div>

                    <div className="col-md-5">
                        <h2>Purchase Bill</h2>
                        <p>Keep track of all the bills generated within the system</p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Features