import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import memberSlice from "./reducers/memberSlice";
import postsSlice from "./reducers/postsSlice";
import blogSlice from "./reducers/blogSlice";
import commentsSlice from "./reducers/commentsSlice";

const rootReducer = combineReducers({
	userSlice,
	memberSlice,
	postsSlice,
	blogSlice,
	commentsSlice
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']