import { ServiceCard } from './ServiceCard'
import { services } from '../../lib/constants'

export function ServicesSection() {
	return (
		<section id='services'>
			<div className='container'>
				<h2>Услуги</h2>
				<div className='row'>
					{services.map((service, i) => (
						<ServiceCard key={service.id} index={i} {...service} />
					))}
				</div>
			</div>
		</section>
	)
}
