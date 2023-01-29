import Link from 'next/link'
import { Logo } from './Logo'
import { AnchorLink } from './AnchorLink'

export function Header() {
	return (
		<header id='header'>
			<div className='circle'></div>
			<AnchorLink className='logo' anchor='main'>
				<Logo />
				<span>ARTCODE</span>
			</AnchorLink>
			<nav className='menu'>
				<div className='line'></div>
				<ul>
					<li className='act'>
						<AnchorLink anchor='main'>Главная</AnchorLink>
					</li>
					<li>
						<Link href='services'>Услуги</Link>
					</li>
					<li>
						<AnchorLink anchor='how'>Как мы работаем</AnchorLink>
					</li>
					<li>
						<AnchorLink anchor='about'>О компании</AnchorLink>
					</li>
					<li>
						<Link href='portfolio'>Портфолио</Link>
					</li>
					<li>
						<AnchorLink anchor='contacts'>Контакты</AnchorLink>
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
				<Link href='https://www.instagram.com/artcode.web' target='_blank' rel='noreferrer'>
					Instagram
				</Link>
				<Link href='https://t.me/slavakazak' target='_blank' rel='noreferrer'>
					Telegram
				</Link>
				<Link href='viber://chat?number=%2B375299672394' target='_blank' rel='noreferrer'>
					Viber
				</Link>
			</div>
		</header>
	)
}
