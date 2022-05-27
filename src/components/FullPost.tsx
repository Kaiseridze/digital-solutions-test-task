import React from 'react'

interface IFullPost {
   body: string,
   title: string
}

function FullPost({ body, title }: IFullPost) {
	return (
		<div className='full_post'>
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}

export default FullPost
