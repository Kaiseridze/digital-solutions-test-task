import axios from "axios"
import { IPost, IUser } from "../../models"
import { AppDispatch } from "../store"
import { userSlice } from "./userSlice"
import { memberSlice } from "./memberSlice"
import { postSlice } from "./postsSlice"
import { blogSlice } from "./blogSlice"
import { commentsSlice } from './commentsSlice'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.usersFetching)
		const response = await axios.get<IUser[]>(
			"https://jsonplaceholder.typicode.com/users"
		)
		dispatch(userSlice.actions.usersFetchingSuccess(response.data))
	} catch (e: any) {
		dispatch(userSlice.actions.usersFetchingError(e.message))
	}
}

export const fetchMember =
	(id: string | any) => async (dispatch: AppDispatch) => {
		try {
			dispatch(memberSlice.actions.memberFetching)
			const response = await axios.get<IUser>(
				`https://jsonplaceholder.typicode.com/users/${id}`
			)
			dispatch(memberSlice.actions.memberFetchingSuccess(response.data))
		} catch (e: any) {
			dispatch(memberSlice.actions.memberFetchingError(e.message))
		}
	}

export const fetchPosts =
	(id: string | any) => async (dispatch: AppDispatch) => {
		try {
			dispatch(postSlice.actions.postsFetching)
			const response = await axios.get<IPost[]>(
				`https://jsonplaceholder.typicode.com/users/${id}/posts?_limit=2`
			)
			dispatch(postSlice.actions.postsFetchingSuccess(response.data))
		} catch (e: any) {
			dispatch(postSlice.actions.postsFetchingError(e.message))
		}
	}

export const fetchAllPosts =
	(id: string | any) => async (dispatch: AppDispatch) => {
		try {
			dispatch(postSlice.actions.postsFetching)
			const response = await axios.get<IPost[]>(
				`https://jsonplaceholder.typicode.com/users/${id}/posts`
			)
			dispatch(postSlice.actions.postsFetchingSuccess(response.data))
		} catch (e: any) {
			dispatch(postSlice.actions.postsFetchingError(e.message))
		}
	}

export const fetchBlog =
	(id: string | any) => async (dispatch: AppDispatch) => {
		try {
			dispatch(blogSlice.actions.blogFetch)
			const response = await axios.get<IPost>(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			)
			dispatch(blogSlice.actions.blogSuccesFetch(response.data))
		} catch (e: any) {
			dispatch(blogSlice.actions.blogFetchError(e.message))
		}
	}

export const fetchComments = () => async (dispatch: AppDispatch) => {
	const response = await axios.get<IPost>(
		`https://jsonplaceholder.typicode.com/comments?_limit=20`
	)
	dispatch(commentsSlice.actions.commentsFetch(response.data))
}
