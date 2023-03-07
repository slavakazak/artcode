import Link from 'next/link'
import { TelegramIcon } from './Icons/TelegramIcon'
import { ViberIcon } from './Icons/ViberIcon'
import { SubscriptionForm } from './SubscriptionForm'
import { ContactForm } from './ContactForm'

export function Footer() {
	return (
		<footer id='footer'>
			<div className='subscription'>
				<div className='container'>
					<SubscriptionForm />
					<ContactForm />
				</div>
			</div>
			<div id='contacts'>
				<div className='container'>
					<div className='phones'>
						<p className='title'>Телефоны:</p>
						<Link className='tel' href='tel:+375299672394'>
							+375 (29) 967-23-94
						</Link>
						<Link
							className='icon'
							href='https://t.me/slavakazak'
							target='_blank'
							rel='noreferrer'
							aria-label='Telegram'>
							<TelegramIcon />
						</Link>
						<Link href='viber://chat?number=%2B375299672394' target='_blank' rel='noreferrer' aria-label='Viber'>
							<ViberIcon />
						</Link>
						<br />
						<Link className='tel' href='tel:+375293630045'>
							+375 (29) 363-00-45
						</Link>
						<Link
							className='icon'
							href='https://t.me/NikitaGrech'
							target='_blank'
							rel='noreferrer'
							aria-label='Telegram'>
							<TelegramIcon />
						</Link>
						<Link href='viber://chat?number=%2B375293630045' target='_blank' rel='noreferrer' aria-label='Viber'>
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
