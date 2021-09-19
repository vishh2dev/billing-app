// import axios from "axios"
import axios from '../config/axios-config'


// api call for getting all bill 

export const startGetAllBill = () =>{
    return(dispatch) =>{
        axios.get('/bills',{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    dispatch(getAllBill(result)) 
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const getAllBill = (data) =>{
    return{
        type : 'GET_ALL_BILL',
        payload : data
    }
}


// api call for bill creation

export const startCreateBill = (billData,redirect) =>{
    return(dispatch) =>{
        axios.post('/bills',billData,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    alert('successfully Bill generated')
                    dispatch(createBill(result))
                    redirect(result._id)
                   
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const createBill = (data) =>{
    return{
        type : 'CREATE_BILL',
        payload : data
    }
}

// api for deleting a bill


export const startDeleteBill = (id) =>{
    return(dispatch) =>{
        axios.delete(`/bills/${id}`,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    dispatch(deleteBill(result._id))
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const deleteBill = (data) =>{
    return{
        type : 'DELETE_BILL',
        payload : data
    }
}


// get a single bill detail

export const startGetSingleBill = (id) =>{
    return(dispatch) =>{
        axios.get(`/bills/${id}`,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    dispatch(getSingleBill(result))
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const getSingleBill = (data) =>{
    return{
        type : 'GET_SINGLE_BILL',
        payload : data
    }
}