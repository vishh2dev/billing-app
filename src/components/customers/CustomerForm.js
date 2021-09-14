import React, { useState } from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'

import TextField from '../TextField'



const CustomerForm = (props) =>{
    const {formSubmit,name : userName, mobile : phone, mail : email} = props
    const[name,setName] = useState(userName ? userName : '')
    const[mobile,setMobile] = useState(phone ? phone : '')
    const[mail,setMail] = useState(email ? email : '')

    const validate = Yup.object({
        name : Yup.string()
           .max(15,'Must be 15 characters or less')  
           .required('name is required'),
        mobile : Yup.string()
           .min(10,'Must be 10 characters ')  
           .required('phone number is required'),
        email : Yup.string()
           .email('Email is invalid')  
        
    })
   
    return(
        <div>
            
            <Formik
                initialValues={{
                    name:name,
                    mobile:mobile,
                    email:mail
                }}

                validationSchema={validate}
                
                onSubmit={values => {
                  formSubmit(values)
                }}
                
               
            >        
                {formik => (
                    <div >
                        <Form>
                            <TextField name="name" type="text" placeholder="enter customer name" />
                            <TextField name="mobile" type="text" placeholder="enter customer phone number" />
                            <TextField name="email" type="email" placeholder="enter customer email" />
                            
                            <Button variant="success " type="submit"  style={{margin:'20px 120px'}}> submit </Button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CustomerForm