import ExportedImage from 'next-image-export-optimizer'
import { Footer } from '../components/Footer'
import { MainLayout } from '../components/MainLayout'
import { jobs } from '../lib/constants'
import { JobCard } from '../components/JobCard'

export default function Job() {
	return (
		<MainLayout
			title='Присоединяйтесь к команде ARTCODE и начни карьеру в веб-разработке'
			description='Ищете работу в сфере веб-дизайна и разработки? ARTCODE - идеальное место для вас! Наша команда состоит из опытных профессионалов, которые всегда ищут талантливых веб-дизайнеров и разработчиков. Мы предлагаем конкурентоспособную заработную плату, гибкий график работы и благоприятную среду. Кроме того, у вас будет возможность поработать с новейшими технологиями и концепциями дизайна. Подайте заявку сейчас и поднимите свою карьеру на новый уровень'
			keywords='веб-дизайн, веб-разработка, работа в веб-дизайне, работа в веб-разработке, зарплата в веб-разработке, зарплата в веб-дизайне, карьера в веб-дизайне, карьера в веб-разработке, веб-дизайн и разработка, команда веб-разработчиков, команда веб-дизайна, веб-дизайн и команда разработчиков, ARTCODE, вакансии веб-дизайна, вакансии веб-разработки'>
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
						<ExportedImage src='/img/job.png' width={1066} height={365} priority alt='job' />
					</div>
				</div>
			</section>
			<Footer />
		</MainLayout>
	)
}
