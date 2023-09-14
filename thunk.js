// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")

//constant
const GET_TO_DOS_REQUEST = "GET_TO_DOS_REQUEST"
const GET_TO_DOS_SUCCESS = "GET_TO_DOS_SUCCESS"
const GET_TO_DOS_FAILED = "GET_TO_DOS_FAILED"
const API_URL="https://jsonplaceholder.typicode.com/todos"

// states
const initialToDosState = {
    toDos: [],
    isLoading: false,
    error: null,
}

// action
const getToDosRequest = () => {
    return {
        type: GET_TO_DOS_REQUEST
    }
}

const getToDosSuccess = (toDos) => {
    return {
        type: GET_TO_DOS_SUCCESS,
        payload: toDos
    }
}

const getToDosFailed = (error) => {
    return {
        type: GET_TO_DOS_FAILED,
        payload: error
    }
}

// reducer
const toDosReducer = (state = initialToDosState, action) => {
    switch (action.type) {
        case GET_TO_DOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TO_DOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                toDos: action.payload
            }
        case GET_TO_DOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

//async action creator
const fetchData =()=>{
    return (dispatch)=>{
        dispatch(getToDosRequest())
        axios.get(API_URL).then((res)=>{
            const toDos = res.data;
            const title = toDos.map(todo=> todo.title)
            dispatch(getToDosSuccess(title))
        }).catch((error)=>{
            const errorMessage = error.message;
            dispatch(getToDosFailed(errorMessage))
        })
    }
}

// store
const store =createStore(toDosReducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())