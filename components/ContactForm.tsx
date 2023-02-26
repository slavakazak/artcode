export function ContactForm() {
	return (
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
	)
}
