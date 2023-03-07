import Link from 'next/link'
import { usePopUp } from '../PopUpContext'

interface ServiceCardInterface {
	title: string
	shortTitle?: string
	shortText: string
	anchor?: string
	index?: number
}

export function ServiceCard({ title, shortText, shortTitle, anchor = '', index = 0 }: ServiceCardInterface) {
	const { openPopUp } = usePopUp()

	return (
		<div className='service_card' data-animate='fadeInUp' data-mobile-animate='fadeInLeft' data-delay={index}>
			<h3>{shortTitle || title}</h3>
			<div className='line'></div>
			<p className='description'>{shortText}</p>
			<Link href={'/services' + (anchor && '#') + anchor} className='more' aria-label={title}>
				<div className='arrow'>
					<svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
						<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
					</svg>
				</div>
				<span>Подробнее</span>
			</Link>
			<div className='order_service' onClick={() => openPopUp(title)}>
				Заказать услугу
			</div>
		</div>
	)
}
