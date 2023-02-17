

export const initialState={
    data:[],
    cartData:[],
    wishlist:[]
}


export const Reducer=(state,{type,payload})=>{

switch(type){
    case 'getAllData':
    return {
        ...state,data:payload
    }
    case 'singleProduct':
    return {
        ...state,data:payload
    }
    case 'search':
    return {
        ...state,data:payload
    }
    case 'filter':
    return {
        ...state,data:payload
    }
    case 'newfilter':
    let Data=state.data.filter((el)=>el.category==payload)
    console.log(Data,state.data)
    return {
        ...state,
        data:[...Data]
    }
    case 'Addtocart':
    return{
        ...state,cartData:[...state.cartData,{...payload ,qty:1,totalprice:Number(payload.price)}]
    }
    case 'IncrementQty':
        
        let index=state.cartData.findIndex((el)=>el._id==payload._id)
        const totalqty=state.cartData[index].qty;
        
        const addone = totalqty + 1

        const newCartData = state.cartData
        newCartData[index].qty = addone
        const price=payload.price;
        newCartData[index].totalprice=price*addone
      
        
    return {

         ...state,
         cartData:[...newCartData]
    }
    case 'DecrementQty':
        let dindex=state.cartData.findIndex((el)=>el._id==payload._id)
        const dtotalqty=state.cartData[dindex].qty;
        
        const subone = dtotalqty - 1

        const dnewCartData = state.cartData
        dnewCartData[dindex].qty = subone
        const dprice=payload.price;
        dnewCartData[dindex].totalprice=dprice*subone
      
        
    return {

         ...state,
         cartData:[...dnewCartData]
    }  
    case 'RemoveItem':
    return {
        ...state,cartData:[...state.cartData].filter((el)=>el._id!==payload)
    }
    case 'wishlist':
    return {
        ...state,wishlist:[...state.wishlist,payload]
    }

    case 'RemoveItemwishlist':
        return {
            ...state,wishlist:[...state.wishlist].filter((el)=>el._id!==payload)
        }
    case 'CartProduct':
        return{
            ...state ,
        }
    
    default:
        throw new Error();

}
}