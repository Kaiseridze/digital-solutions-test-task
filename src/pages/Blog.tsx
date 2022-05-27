import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useParams } from "react-router-dom"
import { fetchBlog, fetchComments } from "../store/reducers/actionCreators"
import Comments from "../components/Comments"
import FullPost from "../components/FullPost"
import Modal from "../components/Modal"

const Blog = () => {
	const [modal, setModal] = useState(false)
	const dispatch = useAppDispatch()
	const { postId } = useParams()
	const { blog } = useAppSelector((state) => state.blogSlice)
	const { comments } = useAppSelector((state) => state.commentsSlice)
	useEffect(() => {
		dispatch(fetchBlog(postId))
		dispatch(fetchComments())
	}, [postId])

	return (
		<div className='interface'>
			<div className='blog'>
				{<FullPost body={blog.body} title={blog.title} />}
				<h1>Комментарии</h1>
				<div className='all_comments'>
					{comments.map((comment) => (
						<Comments
							key={comment.id}
							body={comment.body}
							email={comment.email}
							name={comment.name}
						/>
					))}
				</div>
			</div>
			<button onClick={() => setModal(!modal)} className='add_comment'>
				Оставить комментарий
			</button>
			{modal && <Modal setModal={setModal} modal={modal} />}
		</div>
	)
}

export default Blog
