import React from 'react'
import { Link } from "react-router-dom"
import '../styles/post.css'


interface IPost {
   title: string,
	body: string,
	id: number
}

const Post = ({ title, body, id }: IPost) => {

	return (
		<div className='posts_blog'>
			<div className='posts_title'>
				<h3>{title}</h3>
			</div>{" "}
			<p>{body}</p>
			<Link to={`/blog/${id}`}>
				<button className={"show_more"}>Подробнее</button>
			</Link>
		</div>
	)
}

export default Post
