import React from 'react'
import '../styles/comment.css'

interface IComment {
   body: string,
   email: string,
   name: string
}

function Comments({ body, email, name }: IComment) {
   return (
			<div className='comments'>
				<div className='comment_inner'>
					<strong>{name}</strong>
					<strong>{email}</strong>
					<p>{body}</p>
				</div>
			</div>
		)
}

export default Comments
