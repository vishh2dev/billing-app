

const billInitialState = {bills : [],billDetails: { }}

const billReducer = (state=billInitialState,action) =>{
    switch(action.type){
       
        case 'GET_ALL_BILL' : {
            // console.log('billreducer',action.payload)
            return{...state,bills:[...action.payload]}
            
        }

        case 'CREATE_BILL': {
            const newBills = [action.payload,...state.bills]
            return{...state,bills:newBills}
        }

        case 'DELETE_BILL' :{
            const result = state.bills.filter(ele =>ele._id !== action.payload)
            return {...state,bills:result}
        }
        
        case 'GET_SINGLE_BILL' :{
            return{...state,billDetails:action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default billReducer