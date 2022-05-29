import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models"

interface userState {
	member: IUser | any
	isLoading: boolean
	error: string
}

const initialState: userState = {
	member: {} ,
	isLoading: true,
	error: "",
}

export const memberSlice = createSlice({
	name: "member",
	initialState,
	reducers: {
		memberFetching(state) {
			state.isLoading = true
		},
		memberFetchingSuccess(state, action: PayloadAction<IUser>) {
			state.isLoading = false
			state.error = ""
			state.member = action.payload
		},
		memberFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default memberSlice.reducer