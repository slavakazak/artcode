import { FormEvent, ChangeEvent, useState } from 'react'
import { sendToTelegram } from '../lib/sendToTelegram'
import { usePopUpMailing } from './PopUpMailingContext'
import { Captcha } from './Captcha'
import { useInput } from '../lib/useInput'

export function SubscriptionForm() {
	const { setIsPopUpMailingVisible } = usePopUpMailing()
	const email = useInput()
	const [checkbox, setCheckbox] = useState(false)

	async function submitHandler(event: FormEvent) {
		event.preventDefault()

		let text = `<b>Подписка</b>%0A<b>email:</b> ${email.props.value}`

		if (!checkbox)
			await sendToTelegram(text, () => {
				setIsPopUpMailingVisible(true)
				email.setInput('')
			})
	}

	return (
		<form id='subscription' data-mobile-animate='fadeInLeft' onSubmit={submitHandler}>
			<p className='title'>
				Присоединяйся
				<br />к нашей семье по почте
			</p>
			<label data-animate='fadeInLeft'>
				<input className='email' type='email' name='email' required placeholder='Email address' {...email.props} />
			</label>
			<Captcha checkbox={checkbox} setCheckbox={setCheckbox} />
			<input id='btn' className='submit' data-animate='fadeInLeft' type='submit' value='Подписаться' />
		</form>
	)
}
