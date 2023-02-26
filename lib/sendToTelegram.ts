export async function sendToTelegram(text: string, success: () => void, files?: FileList | null) {
	const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN
	const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

	const url = `https://api.telegram.org/bot${token}`

	try {
		const response = await fetch(`${url}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`)

		if (files) {
			const formData = new FormData()
			formData.append('chat_id', chatId || '')
			formData.append('document', files[0], files[0].name)
			await fetch(`${url}/sendDocument`, { method: 'POST', body: formData })
		}

		if (response.ok) {
			success()
		} else {
			alert('Ошибка отправки формы! Попробуйте ещё раз.')
			console.error('Ошибка HTTP: ' + response.status)
		}
	} catch (error) {
		alert('Ошибка отправки формы! Попробуйте ещё раз.')
		console.error(error)
	}
}
