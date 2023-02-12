import Link from 'next/link'
import { TelegramIcon } from './Icons/TelegramIcon'
import { ViberIcon } from './Icons/ViberIcon'

export function Footer() {
	return (
		<footer id='footer'>
			<div className='subscription'>
				<div className='container'>
					<form method='post' id='subscription' data-mobile-animate='fadeInLeft' action=''>
						<p className='title'>
							Присоединяйся
							<br />к нашей семье по почте
						</p>
						<label data-animate='fadeInLeft'>
							<input className='email' type='email' name='email' required placeholder='Email address' />
						</label>
						<input id='btn' className='submit' data-animate='fadeInLeft' type='button' value='Подписаться' />
					</form>
					<form method='post' id='form' action='telegram_contact.php' data-animate='fadeInRight'>
						<p className='title'>Связаться</p>
						<div className='row'>
							<label>
								<span>Имя</span>
								<input type='text' name='name' required placeholder='Введите свое имя' />
							</label>
							<label>
								<span>Email</span>
								<input type='email' name='email' required placeholder='Введите свой Email' />
							</label>
						</div>
						<label>
							<span>Сообщение</span>
							<input type='text' name='message' placeholder='Ваше сообщение' />
						</label>
						<input className='submit' type='submit' value='Отправить' />
					</form>
				</div>
			</div>
			<div id='contacts'>
				<div className='container'>
					<div className='phones'>
						<p className='title'>Телефоны:</p>
						<Link className='tel' href='tel:+375299672394'>
							+375 (29) 967-23-94
						</Link>
						<Link className='icon' href='https://t.me/slavakazak' target='_blank' rel='noreferrer'>
							<TelegramIcon />
						</Link>
						<Link href='viber://chat?number=%2B375299672394' target='_blank' rel='noreferrer'>
							<ViberIcon />
						</Link>
						<br />
						<Link className='tel' href='tel:+375293630045'>
							+375 (29) 363-00-45
						</Link>
						<Link className='icon' href='https://t.me/NikitaGrech' target='_blank' rel='noreferrer'>
							<TelegramIcon />
						</Link>
						<Link href='viber://chat?number=%2B375293630045' target='_blank' rel='noreferrer'>
							<ViberIcon />
						</Link>
					</div>
					<div className='email'>
						<p className='title'>Email:</p>
						<Link href='mailto:info@artcode.by'>info@artcode.by</Link>
					</div>
					<div className='rights'>
						<span>Copyright</span>
						<span>&copy;</span>
						<span>2021</span>
						<span>“ARTCODE”</span>
						<span>Все права защищены.</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
