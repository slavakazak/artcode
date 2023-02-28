import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'
import { ServicePageSection } from '../components/ServicePageSection'
import { services } from '../lib/constants'

export default function Services() {
	return (
		<MainLayout
			title='Услуги веб-дизайна и разработки — ARTCODE'
			description='В ARTCODE мы предлагаем полный спектр профессиональных веб-услуг для бизнеса и частных лиц. Наши услуги включают веб-дизайн и разработку, системы управления контентом и многое другое. Наша команда опытных профессионалов создает адаптивные, удобные и многофункциональные веб-сайты с учетом ваших потребностей. Мы стремимся обеспечить высочайшее качество обслуживания, гарантируя, что все веб-сайты оптимизированы для максимальной видимости и трафика. Свяжитесь с нами сегодня, чтобы начать работу над вашим проектом.'
			keywords='artcode, арткод, сайт, дизайн, landing page, лендинг, сайт-визитка, многостраничный сайт, сайт под ключ, дизайн сайта, графический дизайн'>
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
