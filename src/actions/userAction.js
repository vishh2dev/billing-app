import axios from '../config/axios-config'
import swal from 'sweetalert2'

import { startGetCustomer } from './customerAction'
import { startGetProduct } from './productAction'
import { startGetAllBill } from './billAction'


// api call for registering a user into the app

export const startRegister = (registerData,redirect) =>{
    return(dispatch)=>{
        axios.post('/users/register',registerData)
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('keyValue')){
                    if(result.keyValue.email){
                        swal.fire({
                            icon: 'error',
                            text: 'Email already exist!'
                        })
                    }else{
                        swal.fire({
                            icon: 'error',
                            text: 'Name already exist!'
                        })
                    } 
                }else{
                    swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'successfully registered',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    dispatch(isRegister(true))
                    redirect()
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const isRegister = (value) =>{
    return{
        type : 'IS_REGISTER',
        payload : value
    }
}


// api call for login 

export const startLogin = (loginData,redirect) =>{
    return(dispatch) =>{
        axios.post('/users/login',loginData)
        .then((response) =>{
            const result = response.data
            console.log(result);
            if(result.hasOwnProperty('errors')){
                swal.fire({
                    icon: 'error',
                    text: result.errors
                })
            }
            else{
                // alert('successfully logged in')
                localStorage.setItem('token',result.token)
                dispatch(isLogin(true))
                dispatch(startGetCustomer())
                dispatch(startGetProduct())
                dispatch(startGetAllBill())
                dispatch(startGetUserInfo())
                redirect()
            }
        })
        .catch((err) =>{
            swal.fire({
                icon: 'error',
                text: err.message
            })
        })

    }
}

export const isLogin = (value) =>{
    return{
        type : 'IS_LOGIN',
        payload : value
    }
}

// api call for getting user information 

export const startGetUserInfo = () =>{
    return(dispatch) =>{
        axios.get('/users/account',{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) =>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }
            else{
                dispatch(userInfo(result))
            }
        })
        .catch((err) =>{
            console.log(err)
        })

    }
}

export const userInfo = (value) =>{
    return{
        type : 'USER_INFO',
        payload : value
    }
}



// for logout an action is performed no api call for logout

export const isLogout = (value) =>{
    return{
        type : 'IS_LOGOUT',
        payload : value
    }
}