import axios from 'axios'

// api call for registering a user into the app

export const startRegister = (registerData,redirect) =>{
    return(dispatch)=>{
        axios.post(' http://dct-billing-app.herokuapp.com/api/users/register',registerData)
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('keyValue')){
                    if(result.keyValue.email){
                        alert('email already exist')
                    }else{
                        alert('name already exist')
                    } 
                }else{
                    alert('successfully registered')
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
        axios.post(' http://dct-billing-app.herokuapp.com/api/users/login',loginData)
        .then((response) =>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }
            else{
                alert('successfully logged in')
                localStorage.setItem('token',result.token)
                dispatch(isLogin(true))
                redirect()
            }
        })
        .catch((err) =>{
            console.log(err)
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
        axios.get(' http://dct-billing-app.herokuapp.com/api/users/account',{
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