import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models'

interface userState {
   users: IUser[];
   isLoading: boolean;
   error: string
}

const initialState: userState = {
   users: [],
   isLoading: true,
   error: ''
}

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		usersFetching(state) {
         state.isLoading = true;
		},
		usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
         state.isLoading = false;
         state.error = "";
			state.users = action.payload
		},
		usersFetchingError(state, action: PayloadAction<string>) {
         state.isLoading = false;
         state.error = action.payload
		},
	},
})



export default userSlice.reducer
