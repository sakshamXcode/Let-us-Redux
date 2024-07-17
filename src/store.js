import { combineReducers, createStore } from "redux";

const initialStateAccount={balance:0, loan:0,loanPurpose:""}
const initialStateCustomer={fullname:"",national_ID:"",createdAT:""}


function accountReducer(state=initialStateAccount,action)
{
switch(action.type)
{
    case "account/deposit":
        return {...state,balance:state.balance+action.payload}
        
    case "account/withdraw":
        return {...state,balance:state.balance-action.payload}

    case "account/requestLoan":
        if(state.loan>0)return state;
   
        return {...state, loan:action.payload.amount,loanPurpose:action.payload.purpose,balance:state.balance+action.payload.amount}
    
    case "account/payLoan" :
        return {...state,loan:0,loanPurpose:"",balance:state.balance-state.loan,}   ;

        default:
    return state;
}
}
function customerReducer(state,action)
{
    switch(action.type)
{
    case  "customer/createCustomer" :
    return {...state,fullname:action.payload.fullname, national_ID:action.payload.national_ID,createdAT:action.payload.national_ID}
    case "customer/updateName":
        return {...state, fullname: action.payload}
    default:
        return {...state};
}
}

const rootReducer=combineReducers({acccount:accountReducer,customer:customerReducer})



const store = createStore(rootReducer);



// store.dispatch({type:"account/deposit",payload:500});
// console.log(store.getState())
// store.dispatch({type:"account/withdraw",payload:200});
// console.log(store.getState())
// store.dispatch({type:"account/requestLoan",payload:{amount:1000,purpose:"Buy a bike"}});
// console.log(store.getState())

function deposit(amount)
{
    return {type:"account/deposit",payload:amount}
}

function withdraw(amount)
{
    return {type:"account/withdraw",payload:amount}
}
function requestLoan(amount,purpose)
{
    return {type:"account/requestLoan",payload:{amount,purpose}}
}
function payLoan()
{
    return {type:"account/payLoan"}
}



function createCustomer(fullname,national_ID)
{
return {type:'customer/createCustomer', payload:{fullname,national_ID,createdAT:new Date().toISOString()}}
}

function updateName(fullname)
{
return {type:'customer/updateName', payload:fullname}
}

store.dispatch(createCustomer("Saksham",32523632))
console.log(store.getState())
store.dispatch(deposit(500))
console.log(store.getState())
store.dispatch(withdraw(300))
console.log(store.getState())
store.dispatch(requestLoan(100,"Buy a bike"))
console.log(store.getState())
store.dispatch(updateName("Sakshi"))
console.log(store.getState())
store.dispatch(payLoan())
console.log(store.getState())
