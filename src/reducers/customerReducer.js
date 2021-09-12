const customerInitialState = []

const customerReducer = (state=customerInitialState,action) =>{

    function sortAsc(arr,field) {
        return arr.sort(function (a, b) {
           
            const movieA = a[field]
            const movieB = b[field]
            if (movieA > movieB) {
                return 1
            }
            if (movieB > movieA) {
                return -1
            }
            return 0
        })
     }

     function sortDesc(arr,field) {
        return arr.sort(function (a, b) {
            const movieA = a[field]
            const movieB = b[field]

            if (movieA > movieB) {
                return -1
            }
            if (movieB> movieA) {
                return 1
            }
            return 0
        })
     }

    switch(action.type){

        case 'GET_CUSTOMER':{
            return [...action.payload]
        }

        case 'ADD_CUSTOMER':{
            return[...state,{...action.payload}]
        }

        case 'EDIT_CUSTOMER' : {
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

        case 'DELETE_CUSTOMER' : {
            return(
                state.filter((ele) =>{
                    return ele._id !== action.payload
                })
            )
        }
         
        case 'SORT_BY_NAME':{
           
           
            if(action.payload === "asc"){
                sortAsc(state,'name')
            }
            else if(action.payload === "desc"){
                sortDesc(state,'name')
            }
        
        }

        default:{
            return [...state]
        }
    }
}

export default customerReducer