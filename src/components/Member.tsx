import React from 'react'
import { useAppSelector } from '../hooks/redux'
import '../styles/member.css'

const Member = () => {
   const {member} = useAppSelector(state => state.memberSlice)
   return (
			<div className='member'>
				<h1>{member.username}</h1>
				<ul className='member_info'>
					<li>{member.name}</li>
					<li>{member.email}</li>
					<li>{member.phone}</li>
					<li>{member.website}</li>
					<li>{member.company?.name}</li>
					<li>{member.company?.bs}</li>
				</ul>
			</div>
		)
}

export default Member
