import Image from 'next/image'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'
import { jobs } from '../lib/constants'
import { JobCard } from '../components/JobCard'

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
						{jobs.map((job, i) => (
							<JobCard key={job.id} {...job} index={i} />
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
