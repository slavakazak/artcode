import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
import { MainLayout } from '../components/MainLayout'

export default function ErrorPage500() {
	return (
		<MainLayout title='Ошибка 500'>
			<section id='page_500'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1>Упс...</h1>
							<p className='text'>Что-то пошло не так</p>
							<p className='code'>Код ошибки: 500</p>
							<Link href='/'>Вернуться на главную</Link>
						</div>
						<div className='col'>
							<ExportedImage src='/img/logo.png' width={430} height={398} priority alt='ARTCODE' placeholder='empty' />
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	)
}
