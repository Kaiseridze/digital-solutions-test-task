import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../../models"

interface postsState {
	posts: IPost[]
	isLoading: boolean
	error: string
}

const initialState: postsState = {
	posts: [],
	isLoading: true,
	error: "",
}

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postsFetching(state, action) {
			state.isLoading = true
		},
		postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
			state.isLoading = false
			state.error = ""
			state.posts = action.payload
		},
		postsFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default postSlice.reducer