import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";



const rootReducer=combineReducers
({acccount:accountReducer,customer:customerReducer})



const store = createStore(rootReducer);



// store.dispatch({type:"account/deposit",payload:500});
// console.log(store.getState())
// store.dispatch({type:"account/withdraw",payload:200});
// console.log(store.getState())
// store.dispatch({type:"account/requestLoan",payload:{amount:1000,purpose:"Buy a bike"}});
// console.log(store.getState())

export default store;