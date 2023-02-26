import { FormEvent, ChangeEvent, useState } from 'react'
import { sendToTelegram } from '../lib/sendToTelegram'
import { usePopUpMailing } from './PopUpMailingContext'

export function SubscriptionForm() {
	const { setIsPopUpMailingVisible } = usePopUpMailing()
	const [email, setEmail] = useState('')
	const [checkbox, setCheckbox] = useState(false)

	async function submitHandler(event: FormEvent) {
		event.preventDefault()

		let text = `<b>Подписка</b>%0A<b>email:</b> ${email}`

		if (!checkbox)
			await sendToTelegram(text, () => {
				setIsPopUpMailingVisible(true)
				setEmail('')
			})
	}

	return (
		<form id='subscription' data-mobile-animate='fadeInLeft' onSubmit={submitHandler}>
			<p className='title'>
				Присоединяйся
				<br />к нашей семье по почте
			</p>
			<label data-animate='fadeInLeft'>
				<input
					className='email'
					type='email'
					name='email'
					value={email}
					required
					placeholder='Email address'
					onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
				/>
			</label>
			<input
				type='checkbox'
				id='checkbox'
				name='checkbox'
				checked={checkbox}
				onClick={() => setCheckbox(previous => !previous)}
			/>
			<input id='btn' className='submit' data-animate='fadeInLeft' type='submit' value='Подписаться' />
		</form>
	)
}
