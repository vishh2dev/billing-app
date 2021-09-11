import React,{useState} from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'

import TextField from '../TextField'


const ProductForm = (props) =>{
    const { formSubmit,name: prodtName, price: prodtPrice } = props
    const[productName,setProductName] = useState(prodtName ? prodtName : '')
    const[productPrice,setProductPrice] = useState(prodtPrice ? prodtPrice : '')

    const validate = Yup.object({
        name : Yup.string()
           .max(25,'Must be 15 characters or less')  
           .required('product name is required'),
        price : Yup.string()
           .required('phone number is required'),
        
    })
    return(
        <div>
             <Formik
                initialValues={{
                  name : productName,
                  price : productPrice
                }}

                validationSchema={validate}

                onSubmit={values => {
                    formSubmit(values)  
                }}
                
               
            >        
                {formik => (
                    <div>
                       
                       {/* {console.log(formik.values)} */}
                        <Form>
                            <TextField name="name" type="text" placeholder="enter product name" />
                            <TextField name="price" type="text" placeholder="enter product price" />
                            
                            
                            <Button variant="success"  type="submit">submit</Button >
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default ProductForm