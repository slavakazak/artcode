import Image from 'next/image'

export function MainSection() {
	return (
		<main id='main'>
			<div className='container'>
				<div className='slider'>
					<div className='slide'>
						<h1>РАЗРАБОТКА САЙТОВ</h1>
						<p>
							Разработка и поддержка корпоративных сайтов с уникальным дизайном для решения бизнес-задач и формирования
							позитивного имиджа вашего бренда.
						</p>
					</div>
					<div className='slide'>
						<h2>Дизайн</h2>
						<p>Анализируем ваш бизнес и на основе этого делаем уникальный и современный дизайн.</p>
					</div>
					<div className='slide'>
						<h2>Landing page</h2>
						<p>Разработаем качественный одностраничный сайт для успешной рекламной компании.</p>
					</div>
					<div className='slide'>
						<h2>Сайт-визитка</h2>
						<p>Разработаем небольшой сайт из одной или нескольких страниц для привлечения клиентов.</p>
					</div>
				</div>
				<div className='order' data-message='Landing page'>
					Заказать услугу
				</div>
				<div className='dots'>
					<div className='numbers'>
						<span className='number act'> 01 </span>
						<span className='number'> 02 </span>
						<span className='number'> 03 </span>
						<span className='number'> 04 </span>
					</div>
					<div className='full_line'>
						<div className='line'></div>
					</div>
				</div>
			</div>
			<div className='screens'>
				<Image className='screen screen1' width={634} height={634} src='/screen_mobile.png' alt='screen_mobile' />
				<Image className='screen screen2' width={1024} height={900} src='/screen.png' alt='screen' />
				<Image className='screen screen3' width={634} height={634} src='/screen_mobile.png' alt='screen_mobile' />
			</div>
			<a className='bottom_scroll flowing-scroll' href='#services'>
				<svg className='arr' viewBox='0 0 17 26' fill='none'>
					<path d='M7.08333 0.25L7.08333 20.3242L1.9975 15.2525L-3.71547e-07 17.25L8.5 25.75L17 17.25L15.0025 15.2525L9.91667 20.3242L9.91666 0.25L7.08333 0.25Z' />
				</svg>
			</a>
		</main>
	)
}
