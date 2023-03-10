import { useState } from 'react'
import ExportedImage from 'next-image-export-optimizer'

export function AboutSection() {
	const [isTextVisible, setIsTextVisible] = useState(false)
	return (
		<section id='about'>
			<div className='container'>
				<h2>О компании</h2>
				<div className='row'>
					<div className='col' data-animate='fadeInLeft'>
						<p className='text'>
							Мы молодая веб студия, объединившая разработчиков и дизайнеров с большим опытом работы.
							<br />
							Для нас принципиально выполнение заказов в оговоренные сроки.
							<br />
							Мы проводим индивидуальную работу с каждым клиентом: вы будете иметь чёткое представление о каждом этапе
							разработки и возможность влиять на рабочий процесс.
							<br />
							Наша веб-студия предоставляет бесплатную техническую поддержку проектов в течение двух месяцев.
						</p>
						<p className={'text text_close' + (isTextVisible ? ' active' : '')}>
							<br />
							При работе мы придерживаемся следующих принципов:
							<br />- свежий взгляд на дизайн;
							<br />- качественная оптимизация работы сайта;
							<br />- своевременная обратная связь.
						</p>
						<div className={'read_more' + (isTextVisible ? ' hidden' : '')} onClick={() => setIsTextVisible(true)}>
							Читать далее
							<svg width='34' height='8' viewBox='0 0 34 8' fill='none'>
								<path
									d='M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64644L30.1716 0.464463C29.9763 0.269201 29.6597 0.269201 29.4645 0.464464C29.2692 0.659726 29.2692 0.976308 29.4645 1.17157L32.2929 4L29.4645 6.82842C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.73079 29.9763 7.73079 30.1716 7.53553L33.3536 4.35355ZM4.37114e-08 4.5L33 4.5L33 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z'
									fill='white'
								/>
							</svg>
						</div>
					</div>
					<div className='col' data-animate='fadeInRight'>
						<ExportedImage src='/img/about.png' fill sizes='605' alt='about' placeholder='empty' />
					</div>
				</div>
			</div>
		</section>
	)
}
