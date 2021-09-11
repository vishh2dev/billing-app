const productInitialState = []

const productReducer = (state=productInitialState,action) =>{
    switch(action.type){

        case 'GET_PRODUCTS':{
            return [...action.payload]
        }

        case 'ADD_PRODUCT':{
            return[...state,{...action.payload}]
        }

        case 'EDIT_PRODUCT' : {
            return(
                state.map((ele) =>{
                    if(ele._id === action.payload._id){
                        return{...ele,...action.payload}
                    }else{
                        return{...ele}
                    }
                })
            )
        }

        case 'DELETE_ PRODUCT' : {
            return(
                state.filter((ele) =>{
                    return ele._id !== action.payload
                })
            )
        }
        default:{
            return [...state]
        }
    }
}

export default productReducer