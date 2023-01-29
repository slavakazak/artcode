import Image from 'next/image'
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
					<Link href='/img/case1.jpg' target='_blank' className='portfolio_card mov m_mov2'>
						<Image src='/img/case1.jpg' width={600} height={938} alt='portfolio' />
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“neco”</p>
					</Link>
					<Link href='/img/case2.jpg' target='_blank' className='portfolio_card mov delay-1 m_mov3'>
						<Image src='/img/case2.jpg' width={600} height={2731} alt='portfolio' />
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“Floristics by Daniela”</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
