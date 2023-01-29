import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'

export default function Services() {
	return (
		<MainLayout
			title='ARTCODE - Услуги'
			description='Выполняем широкий спектр услуг любой сложности: лендинги, сайты-визитки, многостраничные сайты, дизайн сайтов, графический дизайн'
			keywords='artcode, арткод, сайт, дизайн, landing page, лендинг, сайт-визитка, многостраничный сайт, дизайн сайта, графический дизайн'>
			<section id='services_page'>
				<div className='container'>
					<h1>Услуги</h1>
					<div className='row' id='landing'>
						<div className='col'>
							<h2>Landing page</h2>
							<p className='text'>
								Лендинг - это одностраничный сайт, предназначенный для побуждения клиента выполнить определённое
								действие (купить товар, услугу, подписаться на рассылку и т.д.). Мы сделаем стильную и цепляющую
								страницу, которая привлечёт максимальное количество клиентов.
							</p>
							<p className='prise'>Цена зависит от:</p>
							<ul>
								<li>Количества блоков</li>
								<li>Количества интерактивных элементов</li>
								<li>Наличия и сложности анимации</li>
								<li>Наличия или отсутствия CMS</li>
							</ul>
						</div>
						<div className='col mov3 m_mov2'>
							<div className='video'>
								<video loop poster='/case3.jpg'>
									<source src='/video/landing.mp4' type='video/mp4' />
								</video>
								<div className='back'>
									<svg viewBox='0 0 66 66' fill='none'>
										<path d='M27.5 45.375L44 33L27.5 20.625V45.375ZM33 5.5C17.82 5.5 5.5 17.82 5.5 33C5.5 48.18 17.82 60.5 33 60.5C48.18 60.5 60.5 48.18 60.5 33C60.5 17.82 48.18 5.5 33 5.5ZM33 55C20.8725 55 11 45.1275 11 33C11 20.8725 20.8725 11 33 11C45.1275 11 55 20.8725 55 33C55 45.1275 45.1275 55 33 55Z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className='order_service' data-message='Landing page'>
						Заказать услугу
					</div>
					<div className='row' id='business_card_website'>
						<div className='col'>
							<h2>Сайт-визитка</h2>
							<p className='text'>
								Сайт-визитка - небольшой сайт для привлечения клиентов/партнёров, состоящий из одной или нескольких
								страниц и содержащий основную информацию о владельце или компании: контактные данные, местоположение,
								список услуг или товаров, сотрудники компании, история компании и другое.
							</p>
							<p className='prise'>Цена зависит от:</p>
							<ul>
								<li>Количества страниц и блоков</li>
								<li>Количества интерактивных элементов</li>
								<li>Наличия и сложности анимации</li>
								<li>Наличия или отсутствия CMS</li>
							</ul>
						</div>
						<div className='col mov3 m_mov2'>
							<div className='video'>
								<video loop poster='/case10.png'>
									<source src='/video/severex.mp4' type='video/mp4' />
								</video>
								<div className='back'>
									<svg viewBox='0 0 66 66' fill='none'>
										<path d='M27.5 45.375L44 33L27.5 20.625V45.375ZM33 5.5C17.82 5.5 5.5 17.82 5.5 33C5.5 48.18 17.82 60.5 33 60.5C48.18 60.5 60.5 48.18 60.5 33C60.5 17.82 48.18 5.5 33 5.5ZM33 55C20.8725 55 11 45.1275 11 33C11 20.8725 20.8725 11 33 11C45.1275 11 55 20.8725 55 33C55 45.1275 45.1275 55 33 55Z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className='order_service' data-message='Сайт-визитка'>
						Заказать услугу
					</div>
					<div className='row' id='multipage_site'>
						<div className='col'>
							<h2>Многостраничный сайт</h2>
							<p className='text'>
								Многостраничный сайт - это тот случай, когда название говорит само за себя. В рамках данной услуги может
								быть сделан: сайт витрина с подробным описанием товаров или услуг, информационный сайт со статьями и
								другие. В многостраничный сайт также может быть включён весь функционал сайтов-визиток и лендингов.
							</p>
							<p className='prise'>Цена зависит от:</p>
							<ul>
								<li>Количества страниц и блоков</li>
								<li>Количества интерактивных элементов</li>
								<li>Наличия и сложности анимации</li>
								<li>Наличия или отсутствия CMS</li>
							</ul>
						</div>
						<div className='col mov3 m_mov2'>
							<div className='video'>
								<video loop poster='/case12.png'>
									<source src='/video/packland.mp4' type='video/mp4' />
								</video>
								<div className='back'>
									<svg viewBox='0 0 66 66' fill='none'>
										<path d='M27.5 45.375L44 33L27.5 20.625V45.375ZM33 5.5C17.82 5.5 5.5 17.82 5.5 33C5.5 48.18 17.82 60.5 33 60.5C48.18 60.5 60.5 48.18 60.5 33C60.5 17.82 48.18 5.5 33 5.5ZM33 55C20.8725 55 11 45.1275 11 33C11 20.8725 20.8725 11 33 11C45.1275 11 55 20.8725 55 33C55 45.1275 45.1275 55 33 55Z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className='order_service' data-message='Многостраничный сайт'>
						Заказать услугу
					</div>
					<div className='row' id='design'>
						<div className='col'>
							<h2>Дизайн</h2>
							<p className='text'>
								Солидное внешнее оформление и доступный способ подачи информации – залог того, что гость не закроет
								страницу после нескольких секунд посещения. Мы сделаем оригинальный дизайн (сайта, рекламных баннеров,
								баннеров для инстаграма, листовок, приглашений, меню), который удобен в использовании, имеет приятное
								сочетание цветов и хорошую типографику.
							</p>
							<p className='prise'>Цена зависит от:</p>
							<ul>
								<li>Объёма работы</li>
								<li>Наличия и сложности анимации</li>
							</ul>
						</div>
						<div className='col mov3 m_mov2'>
							<div className='video'>
								<video loop poster='/case9.jpg'>
									<source src='/video/design.mp4' type='video/mp4' />
								</video>
								<div className='back'>
									<svg viewBox='0 0 66 66' fill='none'>
										<path d='M27.5 45.375L44 33L27.5 20.625V45.375ZM33 5.5C17.82 5.5 5.5 17.82 5.5 33C5.5 48.18 17.82 60.5 33 60.5C48.18 60.5 60.5 48.18 60.5 33C60.5 17.82 48.18 5.5 33 5.5ZM33 55C20.8725 55 11 45.1275 11 33C11 20.8725 20.8725 11 33 11C45.1275 11 55 20.8725 55 33C55 45.1275 45.1275 55 33 55Z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className='order_service' data-message='Дизайн'>
						Заказать услугу
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
