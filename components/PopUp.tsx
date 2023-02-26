import { ChangeEvent, useState, FormEvent, useEffect } from 'react'
import { Clip } from './Icons/Clip'
import { RoundedArrow } from './Icons/RoundedArrow'
import { ServicesInterface, JobsInterface, FieldsInterface, SMALL_BREAKPOINT } from '../lib/constants'
import { usePopUp } from './PopUpContext'
import { useRouter } from 'next/router'
import { sendToTelegram } from '../lib/sendToTelegram'

interface FieldsValueInterface {
	[field: string]: string
}

interface PopUpInterface {
	title: string
	text: string
	radioItems: ServicesInterface[] | JobsInterface[]
	fields: FieldsInterface
	filePlaceholder: string
	submitText: string
	formTitle: string
}

export function PopUp({ title, text, radioItems, fields, filePlaceholder, submitText, formTitle }: PopUpInterface) {
	const router = useRouter()
	const { isPopUpVisible, closePopUp, selectedRadio, setSelectedRadio } = usePopUp()
	const [popUpClassName, setPopUpClassName] = useState('')
	const [fieldsValue, setFieldsValue] = useState(
		Object.keys(fields).reduce<FieldsValueInterface>((obj, key) => ({ ...obj, [key]: '' }), {})
	)
	const [files, setFiles] = useState<FileList | null>(null)
	const [isRadioSelectActive, setIsRadioSelectActive] = useState(false)
	const [checkbox, setCheckbox] = useState(false)

	function inputHandler(name: string) {
		return (event: ChangeEvent<HTMLInputElement>) => {
			setFieldsValue(previous => ({ ...previous, [name]: event.target.value }))
			validation()
		}
	}

	function validation() {
		const name = document.getElementById('name') as HTMLInputElement
		const phone = document.getElementById('phone') as HTMLInputElement
		const email = document.getElementById('email') as HTMLInputElement
		if (!name.value) {
			name.setCustomValidity('Введите ваше имя')
		} else {
			name.setCustomValidity('')
		}
		if (!phone.value && !email.value) {
			phone.setCustomValidity('Введите почту, телефон или мессенджер')
		} else {
			phone.setCustomValidity('')
		}
	}

	useEffect(() => validation(), [])

	function fileInputHandler(event: ChangeEvent<HTMLInputElement>) {
		setFiles(event.target.files)
	}

	function selectHandler() {
		setIsRadioSelectActive(previous => !previous)
	}

	async function submitHandler(event: FormEvent) {
		event.preventDefault()

		let text = `<b>${formTitle}</b>`

		if (selectedRadio) text += `%0A${selectedRadio}`

		Object.keys(fields).forEach(field => {
			if (fieldsValue[field].trim()) text += `%0A<b>${field}:</b> ${fieldsValue[field]}`
		})

		if (!checkbox) await sendToTelegram(text, () => router.push('thanks'), files)
	}

	useEffect(() => {
		if (isPopUpVisible) {
			setPopUpClassName('act')
		} else {
			setPopUpClassName(previous => {
				if (previous === 'act') return 'hid'
				return ''
			})
		}
	}, [isPopUpVisible])

	return (
		<div id='pop-up' className={popUpClassName} onClick={closePopUp}>
			<form id='order' onClick={e => e.stopPropagation()} onSubmit={submitHandler}>
				<div className='back' onClick={closePopUp} />
				<p className='title'>{title}</p>
				<p className='text'>{text}</p>
				<div className={'radio_select' + (isRadioSelectActive ? ' act' : '')} onClick={selectHandler}>
					{radioItems
						.slice()
						.sort((a, b) => {
							if (typeof window !== 'undefined' && window.innerWidth <= SMALL_BREAKPOINT) {
								if (a.title === selectedRadio) return -1
								if (b.title === selectedRadio) return 1
							}
							return a.id - b.id
						})
						.map((radio, i) => (
							<div
								key={i}
								className={(i ? 'radio_item' : 'first_radio_item') + (selectedRadio === radio.title ? ' act' : '')}
								onClick={() => setSelectedRadio(radio.title)}>
								<div className='radio' />
								<span>{radio.title}</span>
								{!i && <RoundedArrow />}
							</div>
						))}
				</div>
				{Object.keys(fields).map((name, i) => (
					<label key={i} className={'input_label' + (fieldsValue[name] && ' act')}>
						<span>{fields[name].title}</span>
						<input
							name={name}
							id={name}
							className='input'
							type={fields[name].type}
							onChange={inputHandler(name)}
							value={fieldsValue[name]}
						/>
					</label>
				))}
				<label className='file_label'>
					<span className='file_name'>{(files && files[0].name) || filePlaceholder}</span>
					<Clip />
					<input name='file' className='file' type='file' onChange={fileInputHandler} />
				</label>

				<input
					type='checkbox'
					id='checkbox'
					name='checkbox'
					checked={checkbox}
					onClick={() => setCheckbox(previous => !previous)}
				/>

				<input className='submit' type='submit' value={submitText} />
			</form>
		</div>
	)
}
