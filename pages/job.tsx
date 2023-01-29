import Image from 'next/image'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'

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
						<div className='card mov2 m_mov2'>
							<h2>Требуется UI/UX - дизайнер</h2>
							<p>
								Опыт работы веб-дизайнером от 1 года. Владение Figma, Adobe (Photoshop, Illustrator), также
								приветствуется владение After Effects. Наличие работ в портфолио.
								<br />
								<b>Обязанности:</b> Разработка лендингов, интернет-магазинов, сайтов-компаний, многостраничных сайтов,
								UI-Kit. Приветствуется опыт в сфере графического дизайна.
							</p>
							<div className='respond' data-message='UI/UX - дизайнер'>
								Отозваться
							</div>
						</div>
						<div className='card mov3 m_mov3'>
							<h2>Требуется веб-программист</h2>
							<p>
								Опыт работы веб-программистом от 1 года. Знания HTML/CSS, JavaScript. Умение работать с популярными CMS
								(как минимум с одним из них ). Наличие работ в портфолио. Приветствуется знания React или Vue.js
								<br />
								<b>Обязанности:</b> Разработка лендингов, интернет-магазинов, сайтов-компаний, многостраничных сайтов.
							</p>
							<div className='respond' data-message='Веб-программист'>
								Отозваться
							</div>
						</div>
					</div>
					<div className='img_cont'>
						<Image src='/job.png' width={1066} height={365} alt='job' />
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
