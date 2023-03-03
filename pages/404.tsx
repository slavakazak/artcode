import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
import { MainLayout } from '../components/MainLayout'

export default function ErrorPage404() {
	return (
		<MainLayout title='Ошибка 404'>
			<section id='page_404'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1>Упс...</h1>
							<p className='text'>Похоже мы не можем найти нужную вам страницу</p>
							<p className='code'>Код ошибки: 404</p>
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
