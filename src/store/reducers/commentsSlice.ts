import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Action } from "history"
import { IComments } from "../../models"

interface commentsState {
	comments: IComments[]
}
const initialState: commentsState = {
   comments: [] 
}

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		commentsFetch(state, action: PayloadAction<any>) {
			state.comments = action.payload
		},
		commentsAdd(state, action: PayloadAction<any>) {
			state.comments.push(action.payload)	
		}
	},
})

export default commentsSlice.reducer