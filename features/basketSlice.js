import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item)=> item.id === action.payload.id);
      let newBasket = [...state.items];
      if (index >= 0 ){
        newBasket.splice(index,1);
      } else {
        console.warn(`Cant remove (id: ${action.payload.id}) as its not in the basket.`)
      }
      state.items = newBasket;
    },
    addToBasketId: (state, action) => {
      const index = state.items.findIndex((item)=> item.id === action.payload.id);
      let newBasket = [...state.items];
      newBasket.splice(index,0,state.items[index]);
      state.items = newBasket;
    },
  },
})

// Action creators are generated for each case reducer function

export const { addToBasket, removeFromBasket, addToBasketId } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWidhId = (state, id) => state.basket.items.filter(item=>item.id===id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0);

export default basketSlice.reducer