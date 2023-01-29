import { ServiceCard } from './ServiceCard'

const services = [
	{
		className: 'mov m_mov2',
		title: 'Landing page',
		text: 'Лендинг - это одностраничный сайт, предназначенный для побуждения клиента выполнить определённое действие (купить товар, услугу, подписаться на рассылку и т.д.). Мы сделаем ...',
		anchor: 'landing',
	},
	{
		className: 'mov delay-1 m_mov3',
		title: 'Сайт-визитка',
		text: 'Сайт-визитка - небольшой сайт для привлечения клиентов/партнёров, состоящий из одной или нескольких страниц и содержащий основную информацию о владельце или компании: контактные ...',
		anchor: 'business_card_website',
	},
	{
		className: 'mov delay-2 m_mov2',
		title: 'Многостраничник',
		text: 'Многостраничный сайт - это тот случай, когда название говорит само за себя. В рамках данной услуги может быть сделан: сайт витрина с подробным описанием товаров или услуг ...',
		anchor: 'multipage_site',
	},
	{
		className: 'mov delay-3 m_mov3',
		title: 'Дизайн',
		text: 'Солидное внешнее оформление и доступный способ подачи информации – залог того, что гость не закроет страницу после нескольких секунд посещения. Мы сделаем оригинальный ...',
		anchor: 'design',
	},
]

export function ServicesSection() {
	return (
		<section id='services'>
			<div className='container'>
				<h2>Услуги</h2>
				<div className='row'>
					{services.map((service, i) => (
						<ServiceCard key={i} {...service} />
					))}
				</div>
			</div>
		</section>
	)
}
