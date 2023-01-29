import Link from 'next/link'
import React from 'react'

interface ServiceCardInterface {
	className?: string
	title: string
	text: string
	anchor?: string
}

export function ServiceCard({ className, title, text, anchor = '' }: ServiceCardInterface) {
	return (
		<div className={'service_card ' + className}>
			<h3>{title}</h3>
			<div className='line'></div>
			<p className='description'>{text}</p>
			<Link href={'/services' + (anchor && '#') + anchor} className='more'>
				<div className='arrow'>
					<svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
						<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
					</svg>
				</div>
				<span>Подробнее</span>
			</Link>
			<div className='order_service' data-message={title}>
				Заказать услугу
			</div>
		</div>
	)
}
