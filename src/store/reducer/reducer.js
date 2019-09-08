const initState = {
    age : 21 ,
    loading : false,
    data : []
}

const rootReducer = (state = initState ,action)=>{

    if(action.type === 'AGE_UP'){
        return{
            ...state,
            age: state.age + action.payload ,
            loading : false
        }
    }

    if(action.type === 'AGE_DOWN'){
        return{
            ...state,
            age: state.age - action.payload ,
            loading : false
        }
    }

    if(action.type==='LOADING'){
        return {
            ...state,
            loading : true
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            // data: [action.payload]
            data: state.data.concat(action.payload),
            loading: false
        }
    }

    return state;
}

export default rootReducer