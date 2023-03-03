import { useEffect, useState } from 'react'
import ExportedImage from 'next-image-export-optimizer'
import { MainSlider } from './MainSlider'
import { smoothScrollTo } from '../../lib/smoothScrollTo'
import { usePopUp } from '../PopUpContext'

export function MainSection() {
	const { openPopUp } = usePopUp()

	const [bottomScrollOpacity, setBottomScrollOpacity] = useState(1)

	const scrollHandler = () => {
		const top = window.pageYOffset
		const windowHeight = document.documentElement.clientHeight
		setBottomScrollOpacity(top < windowHeight ? 1 - top / windowHeight : 0)
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [])

	return (
		<main id='main'>
			<div className='container'>
				<MainSlider>
					<div className='order' onClick={() => openPopUp()}>
						Заказать услугу
					</div>
				</MainSlider>
			</div>
			<div className='screens'>
				<ExportedImage
					className='screen screen1'
					width={634}
					height={634}
					priority
					src='/img/screen_mobile.png'
					alt='screen_mobile'
					placeholder='empty'
				/>
				<ExportedImage
					className='screen screen2'
					width={1024}
					height={900}
					priority
					src='/img/screen.png'
					alt='screen'
					placeholder='empty'
				/>
				<ExportedImage
					className='screen screen3'
					width={634}
					height={634}
					priority
					src='/img/screen_mobile.png'
					alt='screen_mobile'
					placeholder='empty'
				/>
			</div>
			<button
				className='bottom_scroll'
				style={{ opacity: bottomScrollOpacity }}
				onClick={() => smoothScrollTo('services')}>
				<svg className='arr' viewBox='0 0 17 26' fill='none'>
					<path d='M7.08333 0.25L7.08333 20.3242L1.9975 15.2525L-3.71547e-07 17.25L8.5 25.75L17 17.25L15.0025 15.2525L9.91667 20.3242L9.91666 0.25L7.08333 0.25Z' />
				</svg>
			</button>
		</main>
	)
}
