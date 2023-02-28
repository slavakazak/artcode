import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'
import { PortfolioCard } from '../components/PortfolioCard'

const portfolio = [
	{
		imageSrc: '/img/case1.jpg',
		href: '/img/case1.jpg',
		tags: 'Дизайн сайта',
		title: '“neco”',
	},
	{
		imageSrc: '/img/case2.jpg',
		href: '/img/case2.jpg',
		tags: 'Дизайн сайта',
		title: '“Floristics by Daniela”',
	},
	{
		imageSrc: '/img/case3.jpg',
		href: '/img/case3.jpg',
		tags: 'Дизайн сайта',
		title: '“Arabica”',
	},
	{
		imageSrc: '/img/case4.jpg',
		href: '/img/case4.jpg',
		tags: 'Дизайн сайта',
		title: 'Велосипеды',
	},
	{
		imageSrc: '/img/case5.jpg',
		href: '/img/case5.jpg',
		tags: 'Дизайн сайта',
		title: '“Travels”',
	},
	{
		imageSrc: '/img/case6.png',
		href: '/img/case6.png',
		tags: 'Дизайн сайта',
		title: '“Trav”',
	},
	{
		imageSrc: '/img/case7.png',
		href: 'https://tocapply.by',
		tags: 'Дизайн сайта, сайт',
		title: '“Tocapply”',
	},
	{
		imageSrc: '/img/case8.png',
		href: '/',
		tags: 'Дизайн сайта, сайт',
		title: '“Artcode”',
	},
	{
		imageSrc: '/img/case9.jpg',
		href: '/img/case9.jpg',
		tags: 'Дизайн',
		title: 'Спортивное меню',
	},
	{
		imageSrc: '/img/case10.png',
		href: 'https://severex.by',
		tags: 'Сайт',
		title: '“Severex”',
	},
	{
		imageSrc: '/img/case11.png',
		href: 'https://beal.by',
		tags: 'Сайт',
		title: '“Beal-Group”',
	},
	{
		imageSrc: '/img/case12.png',
		href: 'https://packland.ru',
		tags: 'Сайт',
		title: '“ПакЛанд”',
	},
	{
		imageSrc: '/img/case13.png',
		href: 'https://learn-online.by',
		tags: 'Сайт',
		title: '“Learn Online”',
	},
	{
		imageSrc: '/img/case14.png',
		href: '/img/case14.png',
		tags: 'Дизайн сайта',
		title: '“W&W”',
	},
	{
		imageSrc: '/img/case15.png',
		href: 'https://dm-mebel.by/',
		tags: 'Сайт',
		title: '“DM - MEBEL”',
	},
]

export default function Portfolio() {
	return (
		<MainLayout
			title='ARTCODE | Портфолио'
			description='ARTCODE — студия веб-дизайна и разработки, предлагающая профессиональные услуги по созданию качественных сайтов. На странице нашего портфолио представлены наши замечательные дизайн-проекты, созданные с вниманием к деталям и SEO-оптимизацией. Наша команда опытных веб-разработчиков работает с новейшими технологиями и инструментами для разработки удобных, многофункциональных и оптимизированных для SEO веб-сайтов, которые приносят результаты. Как надежная студия веб-дизайна и разработки, мы гарантируем нашим клиентам первоклассные услуги.'
			keywords='artcode, арткод, портфолио, веб-студия, веб-студия минск, дизайн сайта, дизайн, сайт, сайт под ключ, графический дизайн, примеры веб-дизайна, примеры работ'>
			<section id='portfolio_page'>
				<div className='container'>
					<h1>Портфолио</h1>
					<div className='row'>
						{portfolio.map((item, i) => (
							<PortfolioCard key={i} index={i} {...item} />
						))}
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
