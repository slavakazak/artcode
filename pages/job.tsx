import Image from 'next/image'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'

const job = [
	{
		title: 'UI/UX - дизайнер',
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
		title: 'веб-программист',
		text: () => (
			<>
				Опыт работы веб-программистом от 1 года. Знания HTML/CSS, JavaScript. Умение работать с популярными CMS (как
				минимум с одним из них ). Наличие работ в портфолио. Приветствуется знания React или Vue.js
				<br />
				<b>Обязанности:</b> Разработка лендингов, интернет-магазинов, сайтов-компаний, многостраничных сайтов.
			</>
		),
	},
]

export default function Job() {
	return (
		<MainLayout
			title='ARTCODE - Вакансии'
			description='Дружный коллектив, гибкий график, работа из дома либо на офисе'
			keywords='artcode, арткод, веб программист, работа в веб студии, дизайнер, разработчик сайтов, веб-студия, верстальщик, студент'>
			<section id='job'>
				<div className='container'>
					<h1>Вакансии</h1>
					<p className='title'>
						<span>Ты</span> нам нужен
					</p>
					<p className='text'>
						Мы, молодая веб-студия с дружным коллективом, которая всегда рада новым лицам у нас. Если ты знаешь чего
						хочешь и желаешь развиваться, то тебе к нам. График работы - гибкий. Работа из дома либо на офисе.
						Приветствуются и студенты ВУЗов/учащиеся колледжей (по-специальностям как связанных так и не связанных с
						веб-разработкой).
					</p>
					<div className='row'>
						{job.map((item, i) => (
							<div
								key={i}
								className='card'
								data-animate={i % 2 ? 'fadeInRight' : 'fadeInLeft'}
								data-mobile-animate='fadeInLeft'>
								<h2>Требуется {item.title}</h2>
								<p>{item.text()}</p>
								<div className='respond' data-message={item.title}>
									Отозваться
								</div>
							</div>
						))}
					</div>
					<div className='img_cont'>
						<Image src='/img/job.png' width={1066} height={365} priority alt='job' />
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
