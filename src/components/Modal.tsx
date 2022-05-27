import React, { useState } from "react"
import '../styles/modal.css'

interface IModal {
	setModal: Function
	modal: boolean
}

function Modal({ setModal, modal }: IModal) {
	const [emailValue, setEmailValue] = useState("")
	const [nameValue, setNameValue] = useState("")
	const [textValue, setTextValue] = useState("")

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
			console.log(
				`Email: ${emailValue}`,
				`Name: ${nameValue}`,
				`Text: ${textValue}`
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
