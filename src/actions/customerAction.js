import axios from '../config/axios-config'
import swal from 'sweetalert2'


// api for customer creation

export const startAddCustomer = (customerData,handleClose) =>{
    return(dispatch) =>{
        axios.post('/customers',customerData,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    swal.fire({
                        icon: 'success',
                        title: 'successfully created',
                      })
                    dispatch(addCustomer(result))
                    handleClose()
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const addCustomer = (value) =>{
    return{
        type : 'ADD_CUSTOMER',
        payload : value
    }
}

// api for getting all customer

export const startGetCustomer = () =>{
    return(dispatch) =>{
        axios.get('/customers' ,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) =>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                dispatch(getCustomer(result))   
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
        
    }
}

export const getCustomer = (value) =>{
    return{
        type : 'GET_CUSTOMER',
        payload : value
    }
}

// api for editing customer details

export const startEditCustomer = (data,id,handleClose) => {

    return(dispatch) =>{
        axios.put(`/customers/${id}`,data ,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) =>{
            const result = response.data
            dispatch(editCustomer(result))
            handleClose()
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}

export const editCustomer = (data) =>{
    return{
        type : 'EDIT_CUSTOMER',
        payload : data
    }
}

// api for deleting a customer

export const startDeleteCustomer = (id) =>{
    // const confirm = window.confirm('are you sure')
   
        return(dispatch)=>{
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((res) => {
                if (res.isConfirmed) {
                    axios.delete(`/customers/${id}`,{
                        headers:{
                            'Authorization':  `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    .then((response) =>{
                        const result = response.data
                        dispatch(deleteCustomer(result._id))
                    })
                    .catch((err) =>{
                        console.log(err)
                    })
                  swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
           
            
        }
         
}

export const deleteCustomer = (id) =>{
    return{
        type:'DELETE_CUSTOMER',
        payload : id
    }
}

