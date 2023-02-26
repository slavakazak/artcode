import { useState, ChangeEvent } from 'react'

export function useInput() {
	const [input, setInput] = useState('')
	return {
		value: input,
		setInput,
		onChange: (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value),
	}
}
