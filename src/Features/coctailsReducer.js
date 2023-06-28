import {createSlice} from "@reduxjs/toolkit"

const initialState = {
     cocktails: {
        isLoading: true,
        isError: false,
        data: []
     },
     cartItems : [],
     showCartItems : false,
}

export const coctailsReducer = createSlice({
    name: "coctails",
    initialState,
    reducers: {
        addItems(state, action){
            console.log(state.cocktails)
            state.cocktails.data = action.payload;
            // state.cocktails.isLoading = false; 
        },
        addCardItem(state, action){
            const cocktailId = action.payload;
            const foundCoctail = state.cocktails.data.find(cocktail => cocktail.idDrink === cocktailId)
            state.cartItems.push(foundCoctail)
        },

        showCard(state, action){
            state.showCartItems = !state.showCartItems

        }
       
    }
})

export const {addItems, addCardItem, showCard} = coctailsReducer.actions
export default coctailsReducer.reducer