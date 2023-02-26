import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'
import { ServicePageSection } from '../components/ServicePageSection'
import { services } from '../lib/constants'

export default function Services() {
	return (
		<MainLayout
			title='ARTCODE - Услуги'
			description='Выполняем широкий спектр услуг любой сложности: лендинги, сайты-визитки, многостраничные сайты, дизайн сайтов, графический дизайн'
			keywords='artcode, арткод, сайт, дизайн, landing page, лендинг, сайт-визитка, многостраничный сайт, дизайн сайта, графический дизайн'>
			<section id='services_page'>
				<div className='container'>
					<h1>Услуги</h1>
					{services.map(service => (
						<ServicePageSection key={service.id} {...service} />
					))}
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
