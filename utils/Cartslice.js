import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice({
    name:"cart",
    initialState:{
        cartitems:[],
    },
    reducers:{
        addItem:(state,action)=>{
              const item=state.cartitems.find((item)=>item.foundBurger.id===action.payload.foundBurger.id)
            if(item){
                item.quantity++
            }else{
            state.cartitems.push({...action.payload, quantity:1})}
        },
        removeitem:(state,action)=>{state.cartitems = state.cartitems.filter(item => item.foundBurger.id !== action.payload.foundBurger.id);},
        clearcart:(state)=>{state.cartitems=[]}
    }
})
export const {addItem,removeitem,clearcart}=cartslice.actions;
export default cartslice.reducer;