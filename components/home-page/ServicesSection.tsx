export function ServicesSection() {
	return (
		<section id='services'>
			<div className='container'>
				<h2>Услуги</h2>
				<div className='row'>
					<div className='service_card mov m_mov2'>
						<h3>Landing page</h3>
						<div className='line'></div>
						<p className='description'>
							Лендинг - это одностраничный сайт, предназначенный для побуждения клиента выполнить определённое действие
							(купить товар, услугу, подписаться на рассылку и т.д.). Мы сделаем ...
						</p>
						<a href='services.html#landing' className='more'>
							<div className='arrow'>
								<svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
									<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
								</svg>
							</div>
							<span>Подробнее</span>
						</a>
						<div className='order_service' data-message='Landing page'>
							Заказать услугу
						</div>
					</div>
					<div className='service_card mov delay-1 m_mov3'>
						<h3>Сайт-визитка</h3>
						<div className='line'></div>
						<p className='description'>
							Сайт-визитка - небольшой сайт для привлечения клиентов/партнёров, состоящий из одной или нескольких
							страниц и содержащий основную информацию о владельце или компании: контактные ...
						</p>
						<a href='services.html#business_card_website' className='more'>
							<div className='arrow'>
								<svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
									<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
								</svg>
							</div>
							<span>Подробнее</span>
						</a>
						<div className='order_service' data-message='Сайт-визитка'>
							Заказать услугу
						</div>
					</div>
					<div className='service_card mov delay-2 m_mov2'>
						<h3>Многостраничник</h3>
						<div className='line'></div>
						<p className='description'>
							Многостраничный сайт - это тот случай, когда название говорит само за себя. В рамках данной услуги может
							быть сделан: сайт витрина с подробным описанием товаров или услуг ...
						</p>
						<a href='services.html#multipage_site' className='more'>
							<div className='arrow'>
								<svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
									<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
								</svg>
							</div>
							<span>Подробнее</span>
						</a>
						<div className='order_service' data-message='Многостраничный сайт'>
							Заказать услугу
						</div>
					</div>
					<div className='service_card mov delay-3 m_mov3'>
						<h3>Дизайн</h3>
						<div className='line'></div>
						<p className='description'>
							Солидное внешнее оформление и доступный способ подачи информации – залог того, что гость не закроет
							страницу после нескольких секунд посещения. Мы сделаем оригинальный ...
						</p>
						<a href='services.html#design' className='more'>
							<div className='arrow'>
								<svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
									<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
								</svg>
							</div>
							<span>Подробнее</span>
						</a>
						<div className='order_service' data-message='Дизайн'>
							Заказать услугу
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
