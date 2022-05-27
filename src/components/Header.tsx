import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {

   return (
			<>
				<header className='header'>
					<Link to='/'>
						<h1 className='header_logo'>Concert Club</h1>
					</Link>
					<div className='header_buttons'>
						<button>Версия для слабовидящих</button>
						<button>Мой профиль</button>
					</div>
				</header>
			</>
		)
}

export default Header
