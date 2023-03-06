import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import { SMALL_BREAKPOINT, SECOND_MEDIUM_BREAKPOINT } from '../../lib/constants'

export function PortfolioSection() {
	return (
		<section id='portfolio'>
			<div className='container'>
				<div className='row'>
					<h2>Портфолио</h2>
					<Link href='portfolio' className='all'>
						Смотреть все
					</Link>
				</div>
				<div className='row'>
					<Link
						href='/img/case1.jpg'
						target='_blank'
						className='portfolio_card'
						data-animate='fadeInUp'
						data-mobile-animate='fadeInLeft'>
						<div className='img-wrapper'>
							<ExportedImage
								src='/img/case1.jpg'
								fill
								sizes={`(max-width: ${SMALL_BREAKPOINT}px) 400px,
              	(max-width: ${SECOND_MEDIUM_BREAKPOINT}px) 520px,
              	600px`}
								alt='portfolio'
								placeholder='empty'
							/>
						</div>
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“neco”</p>
					</Link>
					<Link
						href='/img/case2.jpg'
						target='_blank'
						className='portfolio_card'
						data-animate='fadeInUp'
						data-mobile-animate='fadeInLeft'
						data-delay={1}>
						<div className='img-wrapper'>
							<ExportedImage
								src='/img/case2.jpg'
								fill
								sizes={`(max-width: ${SMALL_BREAKPOINT}px) 400px,
              	(max-width: ${SECOND_MEDIUM_BREAKPOINT}px) 520px,
              	600px`}
								alt='portfolio'
								placeholder='empty'
							/>
						</div>
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“Floristics by Daniela”</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
