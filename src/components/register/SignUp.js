import React from 'react'
import { withRouter } from 'react-router'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'

import TextField from '../TextField'
import { startRegister } from '../../actions/userAction'

const SignUp = (props) =>{

    const dispatch = useDispatch()

    const validate = Yup.object({
        username : Yup.string()
           .max(15,'Must be 15 characters or less')  
           .required('name is required'),
        email : Yup.string()
           .email('Email is invalid')  
           .required('email is required'),
        businessName : Yup.string()
           .max(25,'Must be 25 characters or less')  
           .required('business name is required'),
        password : Yup.string()
           .min(8,'password must be atleast 8 characters')  
           .required('password is required'),
        address : Yup.string()
           
           .required('address is required')
        
    })
    return(
        
        <Formik
            initialValues={{
                username : '',
                email:'',
                businessName:'',
                password:'',
                address:''
            }}
            validationSchema={validate}
            onSubmit={values => {
                const formData = values
                const redirect = () =>{
                    props.history.push('/login')
                }
                dispatch(startRegister(formData,redirect))
                // console.log('data',values)
            }}
        >        
            {formik => (
                <div>
                    <h2 className="my-4 font-weight-bold-display-4">Register with us</h2>
            
                    <Form>
                        <TextField name="username" type="text" placeholder="enter your name" />
                        <TextField name="email" type="email" placeholder="enter email" />
                        <TextField name="businessName" type="text" placeholder="enter your business" />
                        <TextField name="password" type="password" placeholder="enter password" />
                        <TextField name="address"  placeholder="enter address" />
                        <button className="btn btn-primary btn-lg mt-5" type="submit">Register</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default withRouter(SignUp)