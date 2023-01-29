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
					<Link href='/case1.jpg' target='_blank' className='portfolio_card mov m_mov2'>
						<Image src='/case1.jpg' width={1600} height={2500} alt='portfolio' />
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“neco”</p>
					</Link>
					<Link href='/case2.jpg' target='_blank' className='portfolio_card mov delay-1 m_mov3'>
						<Image src='/case2.jpg' width={900} height={4096} alt='portfolio' />
						<p className='tags'>Дизайн сайта</p>
						<p className='title'>“Floristics by Daniela”</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
