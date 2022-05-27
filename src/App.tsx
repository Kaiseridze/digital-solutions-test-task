import React from "react"
import { Routes, Route } from "react-router-dom"
import "./index.css"
import Main from "./pages/Main"
import User from "./pages/User"
import Header from "./components/Header"
import Blog from "./pages/Blog"

function App() {
	return (
		<>
			<Header />
			<div className='App'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='user/:id' element={<User />} />
					<Route path='/blog/:postId' element={<Blog/>}/>
				</Routes>
			</div>
		</>
	)
}

export default App
