import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

export default function Job() {
	return (
		<MainLayout title='Спасибо!'>
			<section id='thanks'>
				<div className='container'>
					<h1>Спасибо!</h1>
					<p>Мы свяжемся с Вами в ближайшее вермя</p>
					<p className='time'>Время работы - с понедельника по субботу с 9:00 до 18:00 по Московскому времени</p>
					<p>Если у Вас есть срочный вопрос, звоните нам по телефонам:</p>
					<Link href='tel:+375299672394'>+375 (29) 967-23-94 A1</Link>
					<br />
					<Link href='tel:+375293630045'>+375 (29) 363-00-45 A1</Link>
					<div className='line'></div>
					<p className='artcode'>Ваш ARTCODE</p>
					<Link href='/' className='back'>
						<svg viewBox='0 0 7 12' fill='none'>
							<path d='M0 10.59L4.32659 6L0 1.41L1.33198 0L7 6L1.33198 12L0 10.59Z' />
						</svg>
						<span>На главную</span>
					</Link>
				</div>
			</section>
		</MainLayout>
	)
}
