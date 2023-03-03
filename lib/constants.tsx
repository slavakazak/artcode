export const MEDIUM_BREAKPOINT = 1650
export const SECOND_MEDIUM_BREAKPOINT = 1400
export const SMALL_BREAKPOINT = 1150

export const HEADER_HEIGHT = 0
export const HEADER_HEIGHT_MEDIUM = 69
export const HEADER_HEIGHT_SMALL = 55

export const PORTFOLIO_IMAGE_WIDTH = 404
export const PORTFOLIO_IMAGE_WIDTH_SECOND_MEDIUM = 350
export const PORTFOLIO_IMAGE_WIDTH_SMALL = 338

export const BEAT_NUMBER = 2100

export interface ServicesInterface {
	id: number
	title: string
	shortTitle?: string
	text: string
	shortText: string
	anchor: string
	price: string[]
	video: {
		poster: string
		src: string
	}
}

export const services: ServicesInterface[] = [
	{
		id: 0,
		title: 'Landing page',
		text: 'Лендинг - это одностраничный сайт, предназначенный для побуждения клиента выполнить определённое действие (купить товар, услугу, подписаться на рассылку и т.д.). Мы сделаем стильную и цепляющую страницу, которая привлечёт максимальное количество клиентов.',
		shortText:
			'Лендинг - это одностраничный сайт, предназначенный для побуждения клиента выполнить определённое действие (купить товар, услугу, подписаться на рассылку и т.д.). Мы сделаем ...',
		anchor: 'landing',
		price: [
			'Количества блоков',
			'Количества интерактивных элементов',
			'Наличия и сложности анимации',
			'Наличия или отсутствия CMS',
		],
		video: {
			poster: '/img/case3.jpg',
			src: '/video/landing.mp4',
		},
	},
	{
		id: 1,
		title: 'Сайт-визитка',
		text: 'Сайт-визитка - небольшой сайт для привлечения клиентов/партнёров, состоящий из одной или нескольких страниц и содержащий основную информацию о владельце или компании: контактные данные, местоположение, список услуг или товаров, сотрудники компании, история компании и другое.',
		shortText:
			'Сайт-визитка - небольшой сайт для привлечения клиентов/партнёров, состоящий из одной или нескольких страниц и содержащий основную информацию о владельце или компании: контактные ...',
		anchor: 'business_card_website',
		price: [
			'Количества страниц и блоков',
			'Количества интерактивных элементов',
			'Наличия и сложности анимации',
			'Наличия или отсутствия CMS',
		],
		video: {
			poster: '/img/case10.png',
			src: '/video/severex.mp4',
		},
	},
	{
		id: 2,
		title: 'Многостраничный сайт',
		shortTitle: 'Многостраничник',
		text: 'Многостраничный сайт - это тот случай, когда название говорит само за себя. В рамках данной услуги может быть сделан: сайт витрина с подробным описанием товаров или услуг, информационный сайт со статьями и другие. В многостраничный сайт также может быть включён весь функционал сайтов-визиток и лендингов.',
		shortText:
			'Многостраничный сайт - это тот случай, когда название говорит само за себя. В рамках данной услуги может быть сделан: сайт витрина с подробным описанием товаров или услуг ...',
		anchor: 'multipage_site',
		price: [
			'Количества страниц и блоков',
			'Количества интерактивных элементов',
			'Наличия и сложности анимации',
			'Наличия или отсутствия CMS',
		],
		video: {
			poster: '/img/case12.png',
			src: '/video/packland.mp4',
		},
	},
	{
		id: 3,
		title: 'Дизайн',
		text: 'Солидное внешнее оформление и доступный способ подачи информации – залог того, что гость не закроет страницу после нескольких секунд посещения. Мы сделаем оригинальный дизайн (сайта, рекламных баннеров, баннеров для инстаграма, листовок, приглашений, меню), который удобен в использовании, имеет приятное сочетание цветов и хорошую типографику.',
		shortText:
			'Солидное внешнее оформление и доступный способ подачи информации – залог того, что гость не закроет страницу после нескольких секунд посещения. Мы сделаем оригинальный ...',
		anchor: 'design',
		price: ['Объёма работы', 'Наличия и сложности анимации'],
		video: {
			poster: '/img/case9.jpg',
			src: '/video/design.mp4',
		},
	},
]

export interface JobsInterface {
	id: number
	title: string
	text: () => JSX.Element
}

export const jobs: JobsInterface[] = [
	{
		title: 'UI/UX - дизайнер',
		id: 0,
		text: () => (
			<>
				Опыт работы веб-дизайнером от 1 года. Владение Figma, Adobe (Photoshop, Illustrator), также приветствуется
				владение After Effects. Наличие работ в портфолио.
				<br />
				<b>Обязанности:</b> Разработка лендингов, интернет-магазинов, сайтов-компаний, многостраничных сайтов, UI-Kit.
				Приветствуется опыт в сфере графического дизайна.
			</>
		),
	},
	{
		title: 'Веб-программист',
		id: 1,
		text: () => (
			<>
				Опыт работы веб-программистом от 1 года. Знания HTML/CSS, JavaScript. Умение работать с популярными CMS (как
				минимум с одним из них). Наличие работ в портфолио. Приветствуется знания React или Vue.js
				<br />
				<b>Обязанности:</b> Разработка лендингов, интернет-магазинов, сайтов-компаний, многостраничных сайтов.
			</>
		),
	},
]

export interface FieldsInterface {
	[field: string]: {
		title: string
		type: string
	}
}

export const ServicesFields: FieldsInterface = {
	name: {
		title: 'Как вас зовут',
		type: 'text',
	},
	message: {
		title: 'Пару слов о вашем проекте',
		type: 'text',
	},
	budget: {
		title: 'Примерный бюджет',
		type: 'text',
	},
	email: {
		title: 'Электронная почта',
		type: 'email',
	},
	phone: {
		title: 'Ваш телефон или мессенджер',
		type: 'text',
	},
}

export const JobsFields: FieldsInterface = {
	name: {
		title: 'Как вас зовут',
		type: 'text',
	},
	message: {
		title: 'Пару слов о ваc',
		type: 'text',
	},
	email: {
		title: 'Электронная почта',
		type: 'email',
	},
	phone: {
		title: 'Ваш телефон или мессенджер',
		type: 'text',
	},
}