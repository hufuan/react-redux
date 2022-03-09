import {createSlice} from '@reduxjs/toolkit';
const uiSlice = createSlice({
    name: 'ui',
    initialState: {notification: {message: 'initial', type: 'warning' , open: false}},
    reducers:{
        showNotification(state, actions){
            state.notification = {
                message: actions.payload.message,
                type: actions.payload.type,
                open: actions.payload.open
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;