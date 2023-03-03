import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

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
						<ExportedImage src='/img/case1.jpg' width={600} height={938} alt='portfolio' placeholder='empty' />
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
						<ExportedImage src='/img/case2.jpg' width={600} height={2731} alt='portfolio' placeholder='empty' />
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“Floristics by Daniela”</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
