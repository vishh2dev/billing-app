import React from 'react'
import {ErrorMessage, Field, useField } from 'formik'
import {Form} from 'react-bootstrap'
import '../textfield.css'
const TextField = (props) =>{
    const[field,meta] = useField(props)
    
    return(
        <div className="input">
            {
                field.name === 'address' ?<div className="mt-4 ">
                                                 <Field
                                                     as = 'textarea' 
                                                     className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                                                     {...field} {...props}
                                                />
                                          </div>
                                         :<div className="mt-4 ">
                                             <input 
                                                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                                                {...field} {...props}
                                                autoComplete='off'
                                             />
                                         </div>
                                             
                                         
                                         
            }
            <ErrorMessage  component="div" name={field.name} className="error" />
        </div>
    )
}

export default TextField