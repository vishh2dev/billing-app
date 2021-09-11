import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { withRouter } from 'react-router'
import TextField from '../TextField'
import { startLogin } from '../../actions/userAction'



const Signin= (props) =>{

    const dispatch = useDispatch()

    const validate = Yup.object({
        email : Yup.string()
           .email('Email is invalid')  
           .required('email is required'),
        password : Yup.string()
           .min(8,'password must be atleast 8 characters')  
           .required('password is required')
        
    })
    
    return(
        <Formik
                initialValues={{
                    email:'',
                    password:''

                }}
                validationSchema={validate}
                onSubmit={values => {
                    const formData = values
                    const redirect = () =>{
                        props.history.push('/dashboard')
                    }
                    dispatch(startLogin(formData,redirect))
                }}
                
               
            >        
                {formik => (
                    <div>
                        <h2 className="my-4 font-weight-bold-display-4">Login</h2>
                       
                        <Form>
                            
                            <TextField name="email" type="email" placeholder="enter email" />
                            
                            <TextField name="password" type="password" placeholder="enter password" />
                            
                            <button className="btn btn-primary btn-lg mt-5" type="submit">Login</button>
                        </Form>
                    </div>
                )}
            </Formik>
           
        
    )
}

export default withRouter(Signin) 