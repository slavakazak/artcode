import { Dispatch, SetStateAction } from 'react'

interface СaptchaInterface {
	checkbox: boolean
	setCheckbox: Dispatch<SetStateAction<boolean>>
}

export function Captcha({ checkbox, setCheckbox }: СaptchaInterface) {
	return (
		<input
			type='checkbox'
			style={{ display: 'none' }}
			name='checkbox'
			checked={checkbox}
			onClick={() => setCheckbox((previous: boolean) => !previous)}
		/>
	)
}
