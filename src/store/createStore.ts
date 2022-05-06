import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/user';


const store = configureStore({
    reducer: {
        userDetailsPage: usersReducer
    }
});


export default store;