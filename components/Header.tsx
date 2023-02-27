import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Logo } from './Icons/Logo'
import { AnchorLink } from './AnchorLink'
import { BEAT_NUMBER } from '../lib/constants'
import { usePopUp } from './PopUpContext'
import { usePopUpMailing } from './PopUpMailingContext'

const menu = [
	{
		path: 'main',
		title: 'Главная',
		isAnchor: true,
	},
	{
		path: 'services',
		title: 'Услуги',
		isAnchor: false,
	},
	{
		path: 'how',
		title: 'Как мы работаем',
		isAnchor: true,
	},
	{
		path: 'about',
		title: 'О компании',
		isAnchor: true,
	},
	{
		path: 'portfolio',
		title: 'Портфолио',
		isAnchor: false,
	},
	{
		path: 'contacts',
		title: 'Контакты',
		isAnchor: true,
	},
	{
		path: 'job',
		title: 'Вакансии',
		isAnchor: false,
	},
]

export function Header() {
	const { isPopUpVisible, closePopUp } = usePopUp()
	const { isPopUpMailingVisible, setIsPopUpMailingVisible } = usePopUpMailing()
	const router = useRouter()
	const [activeLi, setActiveLi] = useState('')
	const [lineBlocked, setLineBlocked] = useState(true)
	const [lineRotation, setLineRotation] = useState('')
	const [isHeaderActive, setIsHeaderActive] = useState(false)

	const [beat, setBeat] = useState(0)

	const scrollHandler = useCallback(() => {
		const top = window.pageYOffset
		const windowHeight = document.documentElement.clientHeight
		let scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		)

		setBeat((top * BEAT_NUMBER) / (scrollHeight - windowHeight))

		if (router.pathname === '/') {
			const calculateScroll = (anchor: string) => {
				const element = document.getElementById(anchor)
				return element ? element.offsetHeight / 2 + element.getBoundingClientRect().top + top : 0
			}

			const mainScroll = calculateScroll('main')
			const servicesScroll = calculateScroll('services')
			const howScroll = calculateScroll('how')
			const aboutScroll = calculateScroll('about')
			const portfolioScroll = calculateScroll('portfolio')

			if (top < mainScroll) setActiveLi('main')
			else if (top >= mainScroll && top < servicesScroll) setActiveLi('services')
			else if (top >= servicesScroll && top < howScroll) setActiveLi('how')
			else if (top >= howScroll && top < aboutScroll) setActiveLi('about')
			else if (top >= aboutScroll && top < portfolioScroll) setActiveLi('portfolio')
			else if (top >= portfolioScroll) setActiveLi('contacts')
		}
	}, [router.pathname])

	useEffect(() => {
		switch (router.pathname) {
			case '/':
				setActiveLi('main')
				break
			case '/services':
				setActiveLi('services')
				break
			case '/portfolio':
				setActiveLi('portfolio')
				break
			case '/job':
				setActiveLi('job')
				break
		}
		scrollHandler()
		window.addEventListener('scroll', scrollHandler)
		setLineBlocked(false)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [router.pathname, scrollHandler])

	const clickHandler = () => {
		if (!lineBlocked) setLineRotation('rotation_180')
		setIsHeaderActive(false)
	}

	const mouseEnterHandler = (isActive: boolean) => {
		if (!isActive && !lineBlocked) return () => setLineRotation('rotation_90')
	}
	const mouseLeaveHandler = () =>
		lineBlocked ? undefined : setLineRotation(previous => (previous ? 'rotation_180' : ''))

	const burgerClickHandler = () => setIsHeaderActive(prev => !prev)

	useEffect(() => {
		if (isHeaderActive || isPopUpVisible || isPopUpMailingVisible) {
			document.body.classList.add('hidden')
			document.querySelector('#wrap')?.classList.add('active')
		} else {
			document.body.classList.remove('hidden')
			document.querySelector('#wrap')?.classList.remove('active')
		}
	}, [isHeaderActive, isPopUpVisible, isPopUpMailingVisible])

	return (
		<header
			id='header'
			className={isHeaderActive ? 'active' : ''}
			onClick={() => {
				closePopUp()
				setIsPopUpMailingVisible(false)
			}}>
			<div className={`circle${isHeaderActive ? ' active' : ''}`} />
			<AnchorLink className='logo' anchor='main' onClick={clickHandler}>
				<Logo pastBeat={beat} />
				<span>ARTCODE</span>
			</AnchorLink>
			<nav className={`menu${isHeaderActive ? ' active' : ''}`}>
				<div className={`line ${lineRotation}`} />
				<ul>
					{menu.map((item, i) => (
						<li
							key={i}
							className={activeLi === item.path ? 'active' : ''}
							onClick={clickHandler}
							onMouseEnter={mouseEnterHandler(activeLi === item.path)}
							onMouseLeave={mouseLeaveHandler}
							style={{
								transitionDelay: isHeaderActive ? `${0.3 + 0.02 * i}s` : '0s',
							}}>
							{item.isAnchor ? (
								<AnchorLink anchor={item.path}>{item.title}</AnchorLink>
							) : (
								<Link href={item.path}>{item.title}</Link>
							)}
						</li>
					))}
				</ul>
				<div className={`line ${lineRotation}`} />
			</nav>
			<div className={`burger${isHeaderActive ? ' active' : ''}`} onClick={burgerClickHandler}>
				<div className='line line1' />
				<div className='line line2' />
				<div className='line line3' />
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
