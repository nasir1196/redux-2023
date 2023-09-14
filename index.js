// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux")
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const ADD_USER = "ADD_USER"


const initialState = {
    users:["nasir"],
    count: 1
}



const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}

const incrementCountByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const addUser=(value)=>{
return{
    type:ADD_USER,
    payload:value
}
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                ...state,
                count: 0
            }

        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        case ADD_USER:
            return{
                users:[...state.users, action.payload],
                count:state.count + 1
            }
        default:
            return state;
    }
}



//store 
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(incrementAction())
// store.dispatch(decrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(decrementAction())
// store.dispatch(resetAction())
// store.dispatch(incrementAction())

// store.dispatch(incrementCountByValue(5))
// store.dispatch(incrementCountByValue(15))

store.dispatch(addUser("nafim"))
store.dispatch(addUser("hassan"))





