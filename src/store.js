import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {restuarantListReducer} from './Reducers/restuarantReducer'
// reduceres
const reducers=combineReducers({
    restuarantReducer:restuarantListReducer

})

// create middileware
const middleware=[thunk]
// store
const store=createStore(reducers,applyMiddleware(...middleware))

export default store