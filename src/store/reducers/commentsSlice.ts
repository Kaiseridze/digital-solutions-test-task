import { createSlice, PayloadAction } from "@reduxjs/toolkit"
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
      }
	},
})

export default commentsSlice.reducer