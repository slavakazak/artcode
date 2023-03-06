import { useEffect, useCallback } from 'react'
import Head from 'next/head'
import { Header } from './Header'
import { PopUp } from './PopUp'
import { PopUpMailing } from './PopUpMailing'
import { PopUpProvider } from './PopUpContext'
import { PopUpMailingProvider } from './PopUpMailingContext'
import { services, jobs, ServicesFields, JobsFields, SMALL_BREAKPOINT } from '../lib/constants'
import { useRouter } from 'next/router'

interface MainLayoutInterface {
	children?: JSX.Element | JSX.Element[]
	title?: string
	description?: string
	keywords?: string
}

export function MainLayout({
	children,
	title = 'ARTCODE | Профессиональные веб-решения для вашего бизнеса',
	description = 'Наша команда высококвалифицированных специалистов создает индивидуальные веб-решения с учетом ваших уникальных потребностей. Мы гордимся тем, что предлагаем первоклассные услуги веб-разработки, которые помогут вашему бизнесу подняться на новый уровень и раскрыть его истинный потенциал. Выбирая ARTCODE, вы выбираете качество, надежность и профессиональную поддержку.',
	keywords = 'artcode, арткод, веб студия, веб студия минск, разработка сайтов, сайт, дизайн, landing page, лендинг, сайт-визитка, многостраничный сайт, сайт под ключ, веб-разработка, дизайн веб-сайтов, индивидуальные веб-решения, оптимизация SEO, веб-дизайн, веб-разработка, услуги веб-дизайна, услуги веб-разработки, агентство веб-дизайна, агентство веб-разработки, ARTCODE, компания веб-дизайна, компания веб-разработки, веб-дизайн и разработка, услуги веб-дизайна и разработки, агентство веб-дизайна и разработки, портфолио веб-дизайна, портфолио веб-разработки',
}: MainLayoutInterface) {
	const router = useRouter()

	const scrollHandler = useCallback(() => {
		if (document.documentElement.clientWidth > SMALL_BREAKPOINT) {
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
				<meta property='og:title' content={title} />
				<meta property='og:type' content='website' />
				<meta property='og:description' content={description} />
				<meta property='og:image' content='/ogimage.png' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
			</Head>
			<PopUpProvider>
				<PopUpMailingProvider>
					<Header />
					<PopUpMailing />
					{(router.pathname === '/' || router.pathname === '/services') && (
						<PopUp
							title='Заказ услуги'
							text='Давайте немного познакомимся и узнаем о Вашем проекте и Ваши контакты, затем мы свяжемся и обсудим все более детально.'
							radioItems={services}
							fields={ServicesFields}
							filePlaceholder='Может у вас уже есть ТЗ?'
							submitText='Заказать услугу'
							formTitle='Оформление услуги'
						/>
					)}
					{router.pathname === '/job' && (
						<PopUp
							title='Связаться по поводу работы'
							text='Давайте немного познакомимся и узнаем о Ваc, затем мы свяжемся и обсудим все более детально.'
							radioItems={jobs}
							fields={JobsFields}
							filePlaceholder='Ваше резюме'
							submitText='Отправить'
							formTitle='Вакансии'
						/>
					)}
					<div id='wrap'>{children}</div>
				</PopUpMailingProvider>
			</PopUpProvider>
		</>
	)
}
