import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../../models"

interface userState {
	blog: IPost | any,
	isLoading: boolean,
	error: string
}

const initialState: userState = {
	blog: {},
	isLoading: true,
	error: ''
}

export const blogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {
		blogFetch(state, action: PayloadAction<boolean>) {
			state.isLoading = true
		},
		blogSuccesFetch(state, action: PayloadAction<IPost>) {
			state.blog = action.payload
			state.isLoading = false
			state.error = ""
		},
		blogFetchError(state, action: PayloadAction<any>) {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default blogSlice.reducer