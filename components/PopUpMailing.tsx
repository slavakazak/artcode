import { useState, useEffect } from 'react'
import { usePopUpMailing } from './PopUpMailingContext'

export function PopUpMailing() {
	const { isPopUpMailingVisible, setIsPopUpMailingVisible } = usePopUpMailing()
	const [popUpClassName, setPopUpClassName] = useState('')

	useEffect(() => {
		if (isPopUpMailingVisible) {
			setPopUpClassName('active')
		} else {
			setPopUpClassName(previous => {
				if (previous === 'active') return 'hidden'
				return ''
			})
		}
	}, [isPopUpMailingVisible])

	return (
		<div id='pop-up_mailing' className={popUpClassName} onClick={() => setIsPopUpMailingVisible(false)}>
			<div className='thanks_mailing' onClick={e => e.stopPropagation()}>
				<p className='thanks'>Спасибо</p>
				<p className='text'>Теперь ты будешь в курсе всех событий связанных с ARTCODE.</p>
				<span className='back'>
					<svg viewBox='0 0 7 12' fill='none'>
						<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
					</svg>
					<p onClick={() => setIsPopUpMailingVisible(false)}>Назад</p>
				</span>
			</div>
		</div>
	)
}
