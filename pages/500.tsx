import Link from 'next/link'
import Image from 'next/image'
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
							<Image src='/img/logo.png' width={430} height={398} priority alt='ARTCODE' />
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	)
}
