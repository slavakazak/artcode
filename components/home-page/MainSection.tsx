import Image from 'next/image'
import { MainSlider } from './MainSlider'
import { smoothScrollTo } from '../../lib/smoothScrollTo'
import { AnchorLink } from '../AnchorLink'

export function MainSection() {
	return (
		<main id='main'>
			<div className='container'>
				<MainSlider>
					<div className='order' data-message='Landing page'>
						Заказать услугу
					</div>
				</MainSlider>
			</div>
			<div className='screens'>
				<Image className='screen screen1' width={634} height={634} src='/screen_mobile.png' alt='screen_mobile' />
				<Image className='screen screen2' width={1024} height={900} src='/screen.png' alt='screen' />
				<Image className='screen screen3' width={634} height={634} src='/screen_mobile.png' alt='screen_mobile' />
			</div>
			<button className='bottom_scroll' onClick={() => smoothScrollTo('services')}>
				<svg className='arr' viewBox='0 0 17 26' fill='none'>
					<path d='M7.08333 0.25L7.08333 20.3242L1.9975 15.2525L-3.71547e-07 17.25L8.5 25.75L17 17.25L15.0025 15.2525L9.91667 20.3242L9.91666 0.25L7.08333 0.25Z' />
				</svg>
			</button>
		</main>
	)
}
