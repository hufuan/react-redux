import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducers:{
        replaceData(state,actions) {
            state.totalQuantity = actions.payload.totalQuantity;
            state.itemsList = actions.payload.itemsList;
			state.changed = false;
			state.showCart = false;
        },
        addToCart(state, actions){
            state.changed = true;
            const newItem = actions.payload;
            //to check item already exist;
            const existingItem = state.itemsList.find(
                (item)=> item.id === newItem.id
                );
            if (existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            }
			state.totalQuantity++;
            
        },
        removeFromCart(state, action){
            state.changed = true;
            const id = action.payload;
            const existingItem = state.itemsList.find(item=>item.id === id);
            if (existingItem.quantity ===1){
                state.itemsList = state.itemsList.filter(item=>item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -=  existingItem.price;
				
            }
            state.totalQuantity--;
        },
        setShowCart(state, action){
            state.showCart = !state.showCart;
            console.log("state.showCart=" + state.showCart);
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice;