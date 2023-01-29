import { useEffect } from 'react'
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
