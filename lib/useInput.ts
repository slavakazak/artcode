import { useState, ChangeEvent } from 'react'

export function useInput() {
	const [input, setInput] = useState('')
	return {
		setInput,
		props: {
			value: input,
			onChange: (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value),
		},
	}
}
