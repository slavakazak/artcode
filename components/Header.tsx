import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Logo } from './Icons/Logo'
import { AnchorLink } from './AnchorLink'
import { BEAT_NUMBER } from '../lib/constants'

export function Header() {
	const router = useRouter()
	const [activeLi, setActiveLi] = useState('')
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
		scrollHandler()
		window.addEventListener('scroll', scrollHandler)
		switch (router.pathname) {
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
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [router.pathname, scrollHandler])

	const clickHandler = () => {
		setLineRotation('rotation_180')
		setIsHeaderActive(false)
		document.querySelector('#wrap')?.classList.remove('act')
		document.body.classList.remove('hid')
	}

	const mouseEnterHandler = (isActive: boolean) => {
		if (!isActive) return () => setLineRotation('rotation_90')
	}
	const mouseLeaveHandler = () => setLineRotation('rotation_180')

	const burgerClickHandler = () => {
		setIsHeaderActive(prev => !prev)
		document.querySelector('#wrap')?.classList.toggle('act')
		document.body.classList.toggle('hid')
	}

	const liProps = (title: string) => ({
		className: activeLi === title ? 'act' : '',
		onClick: clickHandler,
		onMouseEnter: mouseEnterHandler(activeLi === title),
		onMouseLeave: mouseLeaveHandler,
	})

	return (
		<header id='header' className={isHeaderActive ? 'act' : ''}>
			<div className={`circle${isHeaderActive ? ' act' : ''}`}></div>
			<AnchorLink className='logo' anchor='main' onClick={clickHandler}>
				<Logo pastBeat={beat} />
				<span>ARTCODE</span>
			</AnchorLink>
			<nav className={`menu${isHeaderActive ? ' act' : ''}`}>
				<div className={`line ${lineRotation}`}></div>
				<ul>
					<li {...liProps('main')}>
						<AnchorLink anchor='main'>Главная</AnchorLink>
					</li>
					<li {...liProps('services')}>
						<Link href='services'>Услуги</Link>
					</li>
					<li {...liProps('how')}>
						<AnchorLink anchor='how'>Как мы работаем</AnchorLink>
					</li>
					<li {...liProps('about')}>
						<AnchorLink anchor='about'>О компании</AnchorLink>
					</li>
					<li {...liProps('portfolio')}>
						<Link href='portfolio'>Портфолио</Link>
					</li>
					<li {...liProps('contacts')}>
						<AnchorLink anchor='contacts'>Контакты</AnchorLink>
					</li>
					<li {...liProps('job')}>
						<Link href='job'>Вакансии</Link>
					</li>
				</ul>
				<div className={`line ${lineRotation}`}></div>
			</nav>
			<div className={`burger${isHeaderActive ? ' act' : ''}`} onClick={burgerClickHandler}>
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
