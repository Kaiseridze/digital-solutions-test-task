import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import '../styles/modal.css'
import {commentsAdd} from '../store/reducers/actionCreators'

interface IModal {
	setModal: Function
	modal: boolean
}

function Modal({ setModal, modal }: IModal) {
	const [emailValue, setEmailValue] = useState("")
	const [nameValue, setNameValue] = useState("")
	const [textValue, setTextValue] = useState("")

	const dispatch = useAppDispatch()
	const {comments} = useAppSelector(state => state.commentsSlice)

	const emailListener = (e: any) => {
		setEmailValue(e.target.value)
	}
	const nameListener = (e: any) => {
		setNameValue(e.target.value)
	}
	const textListener = (e: any) => {
		setTextValue(e.target.value)
   }

   const pushComment = () => {
		if (emailValue && nameValue && textValue) {
			setModal(!modal)
			dispatch(
				commentsAdd({
					email: emailValue,
					name: nameValue,
					body: textValue,
					id: Math.random().toString(36).substring(2, 9),
		})
			)
      }
      else {
         alert("Не все поля заполнены!")
      }
   }
   
	return (
		<div className='modal'>
			<div className='modal_inner'>
				<label htmlFor='email'>
					Email
					<input onChange={emailListener} id='email' type='text' />
				</label>

				<label htmlFor='name'>
					Name
					<input onChange={nameListener} id='name' type='text' />
				</label>
				<textarea
					onChange={textListener}
					name='comment'
					rows={10}
					cols={10}
					id='comment'></textarea>
				<button onClick={pushComment} className='modal_push'>
					Отправить / Send
				</button>
			</div>
		</div>
	)
}

export default Modal
