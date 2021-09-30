// import axios from "axios"
import axios from '../config/axios-config'

// get all available products 

export const startGetProduct = () =>{
    return(dispatch) =>{
        axios.get('/products' ,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) =>{
            const result = response.data
            // console.log(result)
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                dispatch(getProducts(result))   
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
        
    }
}

export const getProducts = (value) =>{
    return{
        type : 'GET_PRODUCTS',
        payload : value
    }
}

// add a new product

export const startAddProduct = (productData,handleClose) =>{
    return(dispatch) =>{
        axios.post('/products',productData,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) =>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    // alert('successfully created')
                    dispatch(addProduct(result))
                    handleClose()
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
    }
}

export const addProduct = (value) =>{
    return{
        type : 'ADD_PRODUCT',
        payload : value
    }
}

//Edit product Details APi call

export const startEditProduct = (data,id,handleClose) => {

    return(dispatch) =>{
        axios.put(`/products/${id}`,data ,{
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) =>{
            const result = response.data
            dispatch(editProduct(result))
            handleClose()
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}

export const editProduct = (data) =>{
    return{
        type : 'EDIT_PRODUCT',
        payload : data
    }
}


export const startDeleteProduct = (id) =>{
    const confirm = window.confirm('are you sure')
   
        return(dispatch)=>{
            if(confirm){
            axios.delete(`/products/${id}`,{
                headers:{
                    'Authorization':  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((response) =>{
                const result = response.data
                dispatch(deleteProduct(result._id))
            })
            .catch((err) =>{
                console.log(err)
            })
        }}
         
}

export const deleteProduct = (id) =>{
    return{
        type:'DELETE_ PRODUCT',
        payload : id
    }
}