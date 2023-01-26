import Link from 'next/link'
import Head from 'next/head'
import { Logo } from './Logo'

interface MainLayoutInterface {
	children?: JSX.Element | JSX.Element[]
	title?: string
	description?: string
	keywords?: string
}

export function MainLayout({
	children,
	title = 'Веб-студия ARTCODE',
	description = 'Разработка качественных и продающих сайтов по доступным ценам. Стильный и современный дизайн. Учитываем все пожелания клиентов',
	keywords = 'artcode, арткод, веб студия, веб студия минск, разработка сайтов, сайт, дизайн, landing page, лендинг, сайт-визитка, многостраничный сайт',
}: MainLayoutInterface) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<header id='header'>
				<div className='circle'></div>
				<a href='#main' className='logo flowing-scroll'>
					<Logo />
					<span>ARTCODE</span>
				</a>
				<nav className='menu'>
					<div className='line'></div>
					<ul>
						<li className='act'>
							<a className='flowing-scroll' href='#main'>
								Главная
							</a>
						</li>
						<li>
							<Link href='services'>Услуги</Link>
						</li>
						<li>
							<a className='flowing-scroll' href='#how'>
								Как мы работаем
							</a>
						</li>
						<li>
							<a className='flowing-scroll' href='#about'>
								О компании
							</a>
						</li>
						<li>
							<Link href='portfolio'>Портфолио</Link>
						</li>
						<li>
							<a className='flowing-scroll' href='#contacts'>
								Контакты
							</a>
						</li>
						<li>
							<Link href='job'>Вакансии</Link>
						</li>
					</ul>
					<div className='line'></div>
				</nav>
				<div className='burger'>
					<div className='line line1'></div>
					<div className='line line2'></div>
					<div className='line line3'></div>
				</div>
				<div className='contacts'>
					<a href='https://www.instagram.com/artcode.web' target='_blank' rel='noreferrer'>
						Instagram
					</a>
					<a href='https://t.me/slavakazak' target='_blank' rel='noreferrer'>
						Telegram
					</a>
					<a href='viber://chat?number=%2B375299672394' target='_blank' rel='noreferrer'>
						Viber
					</a>
				</div>
			</header>
			<div id='wrap'>{children}</div>
		</>
	)
}
