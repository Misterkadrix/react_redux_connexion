import { configureStore } from "@reduxjs/toolkit"
import { authentification } from "../slice"

export const store = configureStore({
    reducer: {
        authentification : authentification.reducer
    }
})