import { useEffect, useCallback } from 'react'
import Head from 'next/head'
import { Header } from './Header'

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
	const scrollHandler = useCallback(() => {
		if (document.documentElement.clientWidth > 1150) {
			document.querySelectorAll('[data-animate]').forEach(element => {
				if (element.getBoundingClientRect().top < document.documentElement.clientHeight) {
					element.classList.add((element as HTMLElement).dataset.animate || '')
				}
			})
			document.querySelectorAll('[data-delay]').forEach(element => {
				;(element as HTMLElement).style.animationDelay = +((element as HTMLElement).dataset.delay || 0) * 0.2 + 's'
			})
		} else {
			document.querySelectorAll('[data-mobile-animate]').forEach(element => {
				if (element.getBoundingClientRect().top < document.documentElement.clientHeight) {
					element.classList.add((element as HTMLElement).dataset.mobileAnimate || '')
				}
			})
			document.querySelectorAll('[data-delay]').forEach(element => {
				;(element as HTMLElement).style.animationDelay = '0s'
			})
		}
	}, [])
	useEffect(() => {
		scrollHandler()
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [scrollHandler])
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			<div id='wrap'>{children}</div>
		</>
	)
}
