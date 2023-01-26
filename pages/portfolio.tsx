import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'

export default function Portfolio() {
	return (
		<MainLayout
			title='ARTCODE - Портфолио'
			description='Большой опыт разработки сайтов различной сложности и тематики'
			keywords='artcode, арткод, портфолио, веб-студия, веб студия минск, дизайн сайта, дизайн, сайт, графический дизайн'>
			<section id='portfolio_page'>
				<div className='container'>
					<h1>Портфолио</h1>
					<div className='row'>
						<div className='portfolio_card mov m_mov2'>
							<Image src='/case1.jpg' width={1600} height={2500} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>“neco”</p>
								</div>
								<a href='/case1.jpg' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-1 m_mov3'>
							<Image src='/case2.jpg' width={900} height={4096} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>“Floristics by Daniela”</p>
								</div>
								<a href='/case2.jpg' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-2 m_mov2'>
							<Image src='/case3.jpg' width={1548} height={4096} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>“Arabica”</p>
								</div>
								<a href='/case3.jpg' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov m_mov3'>
							<Image src='/case4.jpg' width={2400} height={1352} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>Велосипеды</p>
								</div>
								<a href='/case4.jpg' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-1 m_mov2'>
							<Image src='/case5.jpg' width={1300} height={791} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>“Travels”</p>
								</div>
								<a href='/case5.jpg' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-2 m_mov3'>
							<Image src='/case6.png' width={1920} height={4725} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>“Trav”</p>
								</div>
								<a href='/case6.png' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov m_mov2'>
							<Image src='/case7.png' width={404} height={229} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта, сайт</p>
									<p className='title'>“Tocapply”</p>
								</div>
								<a href='https://tocapply.by' target='_blank' rel='noreferrer'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-1 m_mov3'>
							<Image src='/case8.png' width={404} height={229} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта, сайт</p>
									<p className='title'>“Artcode”</p>
								</div>
								<Link href='/'>Смотреть</Link>
							</div>
						</div>
						<div className='portfolio_card mov delay-2 m_mov2'>
							<Image src='/case9.jpg' width={3508} height={2480} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн</p>
									<p className='title'>Спортивное меню</p>
								</div>
								<a href='/case9.jpg' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov m_mov3'>
							<Image src='/case10.png' width={1920} height={1080} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Сайт</p>
									<p className='title'>“Severex”</p>
								</div>
								<a href='https://severex.by' target='_blank' rel='noreferrer'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-1 m_mov2'>
							<Image src='/case11.png' width={1901} height={871} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Сайт</p>
									<p className='title'>“Beal-Group”</p>
								</div>
								<a href='https://beal.by' target='_blank' rel='noreferrer'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-2 m_mov3'>
							<Image src='/case12.png' width={1900} height={1069} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Сайт</p>
									<p className='title'>“ПакЛанд”</p>
								</div>
								<a href='https://packland.ru' target='_blank' rel='noreferrer'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov m_mov2'>
							<Image src='/case13.png' width={1173} height={693} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Сайт</p>
									<p className='title'>“Learn Online”</p>
								</div>
								<a href='https://learn-online.by' target='_blank' rel='noreferrer'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-1 m_mov3'>
							<Image src='/case14.png' width={1920} height={3988} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Дизайн сайта</p>
									<p className='title'>“W&W”</p>
								</div>
								<a href='/case14.png' target='_blank'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card mov delay-2 m_mov2'>
							<Image src='/case15.png' width={1899} height={886} alt='portfolio' />
							<div className='inf'>
								<div className='col'>
									<p className='tags'>Сайт</p>
									<p className='title'>“DM - MEBEL”</p>
								</div>
								<a href='https://dm-mebel.by/' target='_blank' rel='noreferrer'>
									Смотреть
								</a>
							</div>
						</div>
						<div className='portfolio_card hid'></div>
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
