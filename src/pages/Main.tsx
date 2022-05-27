import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchUsers } from "../store/reducers/actionCreators"

const Main = () => {
	const dispatch = useAppDispatch()
	const {users, isLoading, error} = useAppSelector((state => state.userSlice))
	useEffect(() => {
		dispatch(fetchUsers())
	}, [])
	return (
		<>
			{isLoading ? (
				<h1>Идет загрузка...</h1>
			) : (
				<div className='main'>
					<h1>Купили билеты</h1>
					<div className='users'>
						{users.map((user: any) => (
							<Card
								id={user.id}
								key={user.id}
								name={user.name}
								city={user.address?.city}
							/>
						))}
					</div>
				</div>
			)}
			{error && <h1>{error}</h1>}
		</>
	)
}

export default Main
