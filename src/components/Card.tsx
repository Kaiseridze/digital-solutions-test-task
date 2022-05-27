import React from "react"
import { Link, useParams } from 'react-router-dom'
import '../styles/card.css'

interface Iuser {
	name: string
	city: string
	id: number
}

const Card = ({ name,  city, id }: Iuser) => {
	return (
		<div className='user_card'>
			<h2>
				{name} 
			</h2>
			<p>{city}</p>
			<div className='button'>
				<Link to={`user/${id}`}>
					<button>Смотреть профиль</button>
				</Link>
			</div>
		</div>
	)
}

export default Card
