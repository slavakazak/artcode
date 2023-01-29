import React from 'react'

interface ServicePageSectionInterface {
	id?: string
	title?: string
	text?: string
	price?: string[]
	video?: { poster: string; src: string }
}

export function ServicePageSection({ id, title, text, price, video }: ServicePageSectionInterface) {
	return (
		<>
			<div className='row' id={id}>
				<div className='col'>
					<h2>{title}</h2>
					<p className='text'>{text}</p>
					<p className='prise'>Цена зависит от:</p>
					{price && (
						<ul>
							{price.map((text, i) => (
								<li key={i}>{text}</li>
							))}
						</ul>
					)}
				</div>
				{video && (
					<div className='col mov3 m_mov2'>
						<div className='video'>
							<video loop poster={video.poster}>
								<source src={video.src} type='video/mp4' />
							</video>
							<div className='back'>
								<svg viewBox='0 0 66 66' fill='none'>
									<path d='M27.5 45.375L44 33L27.5 20.625V45.375ZM33 5.5C17.82 5.5 5.5 17.82 5.5 33C5.5 48.18 17.82 60.5 33 60.5C48.18 60.5 60.5 48.18 60.5 33C60.5 17.82 48.18 5.5 33 5.5ZM33 55C20.8725 55 11 45.1275 11 33C11 20.8725 20.8725 11 33 11C45.1275 11 55 20.8725 55 33C55 45.1275 45.1275 55 33 55Z' />
								</svg>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className='order_service' data-message={title}>
				Заказать услугу
			</div>
		</>
	)
}
