const initialStateCustomer={fullname:"",national_ID:"",createdAT:""}

export default function customerReducer(state=initialStateCustomer,action)
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


export function createCustomer(fullname,national_ID)
{
return {type:'customer/createCustomer', payload:{fullname,national_ID,createdAT:new Date().toISOString()}}
}

export function updateName(fullname)
{
return {type:'customer/updateName', payload:fullname}
}
