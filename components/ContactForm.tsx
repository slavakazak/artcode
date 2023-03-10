import { useState, FormEvent, ChangeEvent } from 'react'
import { sendToTelegram } from '../lib/sendToTelegram'
import { useRouter } from 'next/router'
import { Captcha } from './Captcha'
import { useInput } from '../lib/useInput'

export function ContactForm() {
	const router = useRouter()
	const name = useInput()
	const email = useInput()
	const message = useInput()
	const [checkbox, setCheckbox] = useState(false)

	async function submitHandler(event: FormEvent) {
		event.preventDefault()
		let text = `<b>Контактная форма</b>%0A<b>name:</b> ${name.props.value}%0A<b>email:</b> ${email.props.value}`
		if (message.props.value) text += `%0A<b>message:</b> ${message.props.value}`
		if (!checkbox) await sendToTelegram(text, () => router.push('thanks'))
	}

	return (
		<form id='form' data-animate='fadeInRight' onSubmit={submitHandler}>
			<p className='title'>Связаться</p>
			<div className='row'>
				<label>
					<span>Имя</span>
					<input type='text' name='name' required placeholder='Введите свое имя' {...name.props} />
				</label>
				<label>
					<span>Email</span>
					<input type='email' name='email' required placeholder='Введите свой Email' {...email.props} />
				</label>
			</div>
			<label>
				<span>Сообщение</span>
				<input type='text' name='message' placeholder='Ваше сообщение' {...message.props} />
			</label>
			<Captcha checkbox={checkbox} setCheckbox={setCheckbox} />
			<input className='submit' type='submit' value='Отправить' />
		</form>
	)
}
