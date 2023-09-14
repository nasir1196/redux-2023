// product Reducer
const { createStore, combineReducers, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')


//product constant
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

//cart constant
const GET_CART_ITEMS = "GET_CART_ITEMS"
const ADD_CART_ITEM = "ADD_CART_ITEM"

//product state
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProduct: 2
}

//cart state
const initialCartState = {
    cartItems: ["sugar"],
    numberOfProduct: 1
}


//product action
const getProducts = (product) => {
    return {
        type: GET_PRODUCTS,
        payload: product
    }
}

const addProduct = (add) => {
    return {
        type: ADD_PRODUCT,
        payload: add
    }
}

//cart action
const getCartItems = (cartItems) => {
    return {
        type: GET_CART_ITEMS,
        payload: cartItems
    }
}

const addCartItem = (add) => {
    return {
        type: ADD_CART_ITEM,
        payload: add
    }
}

//product Reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        default:
            return state;
    }
}

//cart Reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return { ...state }
        case ADD_CART_ITEM:
            return {
                cartItems: [...state.cartItems, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        default:
            return state;
    }
}


//combine reducer for multiple data pass
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

//create store
const store = createStore(rootReducer, applyMiddleware(logger))
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProduct("rice"))




