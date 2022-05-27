import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchMember, fetchPosts, fetchAllPosts } from "../store/reducers/actionCreators"
import Post from "../components/Post"
import Member from "../components/Member"
function User() {
	const [active, setActive] = useState(true)
	const dispatch = useAppDispatch()
	const { id } = useParams()
	const { posts, isLoading, error } = useAppSelector((state) => state.postsSlice)
	useEffect(() => {
		dispatch(fetchMember(id))
		dispatch(fetchPosts(id))
	}, [id])
	
	const showAll = () => {
		dispatch(fetchAllPosts(id))
		setActive(!active)
	}
	return (
		<>
			{isLoading ? (
				<h1>Идет загрузка...</h1>
			) : (
				<>
					{" "}
					<Member />
					<div className='posts'>
						<h1>Посты</h1>
						<div className='posts_inner'>
							{posts.map((post: any) => (
								<Post
									body={post.body}
									id={post.id}
									title={post.title}
									key={post.id}
								/>
							))}
						</div>
						{active && (
							<button onClick={showAll} className={"show_more"}>
								Показать все посты
							</button>
						)}
					</div>{" "}
				</>
			)}
			{error && <h1>{error}</h1>}
		</>
	)
}

export default User
