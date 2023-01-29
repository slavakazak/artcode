import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'
import { PortfolioCard } from '../components/PortfolioCard'

const portfolio = [
	{
		className: 'mov m_mov2',
		imageSrc: '/case1.jpg',
		href: '/case1.jpg',
		tags: 'Дизайн сайта',
		title: '“neco”',
	},
	{
		className: 'mov delay-1 m_mov3',
		imageSrc: '/case2.jpg',
		href: '/case2.jpg',
		tags: 'Дизайн сайта',
		title: '“Floristics by Daniela”',
	},
	{
		className: 'mov delay-2 m_mov2',
		imageSrc: '/case3.jpg',
		href: '/case3.jpg',
		tags: 'Дизайн сайта',
		title: '“Arabica”',
	},
	{
		className: 'mov m_mov3',
		imageSrc: '/case4.jpg',
		href: '/case4.jpg',
		tags: 'Дизайн сайта',
		title: 'Велосипеды',
	},
	{
		className: 'mov delay-1 m_mov2',
		imageSrc: '/case5.jpg',
		href: '/case5.jpg',
		tags: 'Дизайн сайта',
		title: '“Travels”',
	},
	{
		className: 'mov delay-2 m_mov3',
		imageSrc: '/case6.png',
		href: '/case6.png',
		tags: 'Дизайн сайта',
		title: '“Trav”',
	},
	{
		className: 'mov m_mov2',
		imageSrc: '/case7.png',
		href: 'https://tocapply.by',
		tags: 'Дизайн сайта, сайт',
		title: '“Tocapply”',
	},
	{
		className: 'mov delay-1 m_mov3',
		imageSrc: '/case8.png',
		href: '/',
		tags: 'Дизайн сайта, сайт',
		title: '“Artcode”',
	},
	{
		className: 'mov delay-2 m_mov2',
		imageSrc: '/case9.jpg',
		href: '/case9.jpg',
		tags: 'Дизайн',
		title: 'Спортивное меню',
	},
	{
		className: 'mov m_mov3',
		imageSrc: '/case10.png',
		href: 'https://severex.by',
		tags: 'Сайт',
		title: '“Severex”',
	},
	{
		className: 'mov delay-1 m_mov2',
		imageSrc: '/case11.png',
		href: 'https://beal.by',
		tags: 'Сайт',
		title: '“Beal-Group”',
	},
	{
		className: 'mov delay-2 m_mov3',
		imageSrc: '/case12.png',
		href: 'https://packland.ru',
		tags: 'Сайт',
		title: '“ПакЛанд”',
	},
	{
		className: 'mov m_mov2',
		imageSrc: '/case13.png',
		href: 'https://learn-online.by',
		tags: 'Сайт',
		title: '“Learn Online”',
	},
	{
		className: 'mov delay-1 m_mov3',
		imageSrc: '/case14.png',
		href: '/case14.png',
		tags: 'Дизайн сайта',
		title: '“W&W”',
	},
	{
		className: 'mov delay-2 m_mov2',
		imageSrc: '/case15.png',
		href: 'https://dm-mebel.by/',
		tags: 'Сайт',
		title: '“DM - MEBEL”',
	},
]

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
						{portfolio.map((item, i) => (
							<PortfolioCard key={i} priority={i < 10} {...item} />
						))}
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
