export function Footer() {
	return (
		<footer id='footer'>
			<div className='subscription'>
				<div className='container'>
					<form method='post' id='subscription' className='m_mov2' action=''>
						<p className='title'>
							Присоединяйся
							<br />к нашей семье по почте
						</p>
						<label className='mov2'>
							<input className='email' type='email' name='email' required placeholder='Email address' />
						</label>
						<input id='btn' className='submit mov2' type='button' value='Подписаться' />
					</form>
					<form method='post' id='form' action='telegram_contact.php' className='mov3'>
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
						<a className='tel' href='tel:+375299672394'>
							+375 (29) 967-23-94
						</a>
						<a className='icon' href='https://t.me/slavakazak' target='_blank' rel='noreferrer'>
							<svg width='25' height='24' viewBox='0 0 25 24' fill='none'>
								<path
									d='M20.7738 3.71682L2.95051 10.5538C1.73414 11.0398 1.74118 11.7148 2.72734 12.0158L7.3033 13.4358L17.8907 6.79082C18.3914 6.48782 18.8487 6.65082 18.4728 6.98282L9.89487 14.6838H9.89286L9.89487 14.6848L9.57922 19.3768C10.0416 19.3768 10.2457 19.1658 10.5051 18.9168L12.7277 16.7668L17.3509 20.1638C18.2034 20.6308 18.8156 20.3908 19.0277 19.3788L22.0626 5.15082C22.3732 3.91182 21.5871 3.35082 20.7738 3.71682Z'
									fill='#6A9DCD'
									fill-opacity='0.7'
								/>
							</svg>
						</a>
						<a href='viber://chat?number=%2B375299672394' target='_blank' rel='noreferrer'>
							<svg width='19' height='18' viewBox='0 0 19 18' fill='none'>
								<g clip-path='url(#clip0)'>
									<path
										d='M8.83117 0.00310748C7.37907 0.020545 4.25716 0.25792 2.51102 1.85148C1.21215 3.13173 0.758654 5.02455 0.705501 7.36511C0.661395 9.69723 0.608241 14.0769 4.85202 15.2694V17.0857C4.85202 17.0857 4.82545 17.8124 5.30835 17.9615C5.90321 18.1488 6.24192 17.5897 6.80739 16.9889L7.86197 15.8026C10.7656 16.0428 12.9896 15.4893 13.2457 15.4072C13.8349 15.2199 17.1536 14.798 17.6959 10.4178C18.2523 5.89417 17.425 3.04398 15.9317 1.75473H15.9226C15.4719 1.34186 13.6608 0.0289825 9.61433 0.0143575C9.61433 0.0143575 9.31407 -0.00589252 8.83117 0.00254498V0.00310748ZM8.88093 1.27492C9.29315 1.27211 9.54365 1.28955 9.54365 1.28955C12.9686 1.29855 14.6034 2.32398 14.989 2.66936C16.2466 3.74148 16.8946 6.31098 16.4202 10.0876C15.9695 13.7495 13.2779 13.9812 12.7798 14.1393C12.5677 14.2068 10.609 14.6872 8.14131 14.5291C8.14131 14.5291 6.30356 16.7352 5.72905 17.3034C5.63801 17.4029 5.53171 17.4322 5.46385 17.4175C5.36659 17.3939 5.33719 17.2741 5.34284 17.1099L5.36037 14.0954C1.76122 13.1054 1.97326 9.36986 2.01171 7.41854C2.05582 5.46723 2.42393 3.87086 3.5198 2.78973C4.99508 1.4628 7.64596 1.28392 8.8798 1.27492H8.88093ZM9.15235 3.22567C9.12273 3.22537 9.09334 3.23091 9.06588 3.24197C9.03842 3.25302 9.01343 3.26937 8.99235 3.29008C8.97127 3.31078 8.95452 3.33544 8.94306 3.36261C8.93161 3.38979 8.92567 3.41895 8.9256 3.44842C8.9256 3.57442 9.02851 3.67398 9.15235 3.67398C9.71301 3.66338 10.2702 3.76329 10.7919 3.96796C11.3135 4.17263 11.7893 4.47801 12.1917 4.86648C13.0133 5.66017 13.4137 6.72667 13.4289 8.12111C13.4289 8.2443 13.529 8.34667 13.6557 8.34667V8.33767C13.7154 8.33782 13.7727 8.31449 13.8152 8.27277C13.8577 8.23104 13.8818 8.1743 13.8824 8.11492C13.9099 7.45857 13.8029 6.80351 13.5679 6.18958C13.333 5.57564 12.975 5.01564 12.5157 4.54361C11.6206 3.67342 10.4863 3.22511 9.15235 3.22511V3.22567ZM6.17181 3.74148C6.01175 3.71822 5.84852 3.75018 5.70926 3.83204H5.69739C5.37409 4.02056 5.08285 4.25883 4.83449 4.53798C4.6281 4.77536 4.51614 5.01554 4.48673 5.24673C4.46921 5.38454 4.48108 5.52236 4.52236 5.65398L4.53706 5.66298C4.76946 6.34248 5.07312 6.99611 5.44406 7.61148C5.92189 8.47602 6.50993 9.27557 7.19359 9.9903L7.21395 10.0195L7.24618 10.0432L7.26654 10.0668L7.29029 10.087C8.01138 10.7691 8.81708 11.3568 9.68784 11.8359C10.6831 12.3747 11.287 12.6295 11.6494 12.7353V12.7409C11.7557 12.773 11.8524 12.7876 11.9497 12.7876C12.2586 12.7651 12.551 12.6403 12.7803 12.4332C13.0597 12.1861 13.2965 11.8952 13.4815 11.572V11.5664C13.6551 11.2413 13.5963 10.9336 13.3458 10.7255C12.8441 10.2893 12.3016 9.90181 11.7258 9.56842C11.3401 9.3603 10.9483 9.4863 10.7894 9.69723L10.4506 10.1219C10.2771 10.3329 9.96152 10.3036 9.96152 10.3036L9.95248 10.3092C7.59959 9.7113 6.97193 7.34148 6.97193 7.34148C6.97193 7.34148 6.94253 7.01917 7.16023 6.85492L7.58433 6.51517C7.78733 6.35092 7.92869 5.96167 7.71099 5.57748C7.37816 5.00382 6.98952 4.46404 6.55067 3.96592C6.45473 3.84849 6.32013 3.76859 6.17068 3.74036L6.17181 3.74148ZM9.54365 4.40973C9.24339 4.40973 9.24339 4.86086 9.54648 4.86086C9.91984 4.86688 10.2883 4.94604 10.6309 5.09381C10.9735 5.24157 11.2835 5.45505 11.5431 5.72204C11.7799 5.98193 11.9619 6.28645 12.0783 6.61757C12.1947 6.94869 12.243 7.29968 12.2205 7.64973C12.2216 7.70897 12.2459 7.76546 12.2883 7.80709C12.3306 7.84873 12.3877 7.8722 12.4473 7.87248L12.4563 7.88429C12.5163 7.88385 12.5738 7.85995 12.6162 7.81774C12.6586 7.77554 12.6826 7.71842 12.6831 7.65873C12.7034 6.76492 12.4241 6.01511 11.8762 5.41436C11.3254 4.81361 10.557 4.47667 9.57588 4.40973H9.54365ZM9.91516 5.62248C9.60585 5.61348 9.59397 6.07361 9.90045 6.08261C10.6457 6.12086 11.0076 6.49548 11.0551 7.26611C11.0562 7.3246 11.0802 7.38037 11.122 7.42148C11.1639 7.46258 11.2202 7.48576 11.279 7.48604H11.2881C11.3183 7.48476 11.348 7.47749 11.3754 7.46466C11.4028 7.45184 11.4273 7.43372 11.4476 7.41136C11.4678 7.389 11.4834 7.36285 11.4934 7.33444C11.5034 7.30602 11.5076 7.27591 11.5058 7.24586C11.4526 6.24123 10.9019 5.67536 9.9242 5.62305H9.91516V5.62248Z'
										fill='#8304E7'
										fill-opacity='0.7'
									/>
								</g>
								<defs>
									<clipPath id='clip0'>
										<rect width='18.0947' height='18' fill='white' transform='translate(0.236328)' />
									</clipPath>
								</defs>
							</svg>
						</a>
						<br />
						<a className='tel' href='tel:+375293630045'>
							+375 (29) 363-00-45
						</a>
						<a className='icon' href='https://t.me/NikitaGrech' target='_blank' rel='noreferrer'>
							<svg width='25' height='24' viewBox='0 0 25 24' fill='none'>
								<path
									d='M20.7738 3.71682L2.95051 10.5538C1.73414 11.0398 1.74118 11.7148 2.72734 12.0158L7.3033 13.4358L17.8907 6.79082C18.3914 6.48782 18.8487 6.65082 18.4728 6.98282L9.89487 14.6838H9.89286L9.89487 14.6848L9.57922 19.3768C10.0416 19.3768 10.2457 19.1658 10.5051 18.9168L12.7277 16.7668L17.3509 20.1638C18.2034 20.6308 18.8156 20.3908 19.0277 19.3788L22.0626 5.15082C22.3732 3.91182 21.5871 3.35082 20.7738 3.71682Z'
									fill='#6A9DCD'
									fill-opacity='0.7'
								/>
							</svg>
						</a>
						<a href='viber://chat?number=%2B375293630045' target='_blank' rel='noreferrer'>
							<svg width='19' height='18' viewBox='0 0 19 18' fill='none'>
								<g clip-path='url(#clip1)'>
									<path
										d='M8.83117 0.00310748C7.37907 0.020545 4.25716 0.25792 2.51102 1.85148C1.21215 3.13173 0.758654 5.02455 0.705501 7.36511C0.661395 9.69723 0.608241 14.0769 4.85202 15.2694V17.0857C4.85202 17.0857 4.82545 17.8124 5.30835 17.9615C5.90321 18.1488 6.24192 17.5897 6.80739 16.9889L7.86197 15.8026C10.7656 16.0428 12.9896 15.4893 13.2457 15.4072C13.8349 15.2199 17.1536 14.798 17.6959 10.4178C18.2523 5.89417 17.425 3.04398 15.9317 1.75473H15.9226C15.4719 1.34186 13.6608 0.0289825 9.61433 0.0143575C9.61433 0.0143575 9.31407 -0.00589252 8.83117 0.00254498V0.00310748ZM8.88093 1.27492C9.29315 1.27211 9.54365 1.28955 9.54365 1.28955C12.9686 1.29855 14.6034 2.32398 14.989 2.66936C16.2466 3.74148 16.8946 6.31098 16.4202 10.0876C15.9695 13.7495 13.2779 13.9812 12.7798 14.1393C12.5677 14.2068 10.609 14.6872 8.14131 14.5291C8.14131 14.5291 6.30356 16.7352 5.72905 17.3034C5.63801 17.4029 5.53171 17.4322 5.46385 17.4175C5.36659 17.3939 5.33719 17.2741 5.34284 17.1099L5.36037 14.0954C1.76122 13.1054 1.97326 9.36986 2.01171 7.41854C2.05582 5.46723 2.42393 3.87086 3.5198 2.78973C4.99508 1.4628 7.64596 1.28392 8.8798 1.27492H8.88093ZM9.15235 3.22567C9.12273 3.22537 9.09334 3.23091 9.06588 3.24197C9.03842 3.25302 9.01343 3.26937 8.99235 3.29008C8.97127 3.31078 8.95452 3.33544 8.94306 3.36261C8.93161 3.38979 8.92567 3.41895 8.9256 3.44842C8.9256 3.57442 9.02851 3.67398 9.15235 3.67398C9.71301 3.66338 10.2702 3.76329 10.7919 3.96796C11.3135 4.17263 11.7893 4.47801 12.1917 4.86648C13.0133 5.66017 13.4137 6.72667 13.4289 8.12111C13.4289 8.2443 13.529 8.34667 13.6557 8.34667V8.33767C13.7154 8.33782 13.7727 8.31449 13.8152 8.27277C13.8577 8.23104 13.8818 8.1743 13.8824 8.11492C13.9099 7.45857 13.8029 6.80351 13.5679 6.18958C13.333 5.57564 12.975 5.01564 12.5157 4.54361C11.6206 3.67342 10.4863 3.22511 9.15235 3.22511V3.22567ZM6.17181 3.74148C6.01175 3.71822 5.84852 3.75018 5.70926 3.83204H5.69739C5.37409 4.02056 5.08285 4.25883 4.83449 4.53798C4.6281 4.77536 4.51614 5.01554 4.48673 5.24673C4.46921 5.38454 4.48108 5.52236 4.52236 5.65398L4.53706 5.66298C4.76946 6.34248 5.07312 6.99611 5.44406 7.61148C5.92189 8.47602 6.50993 9.27557 7.19359 9.9903L7.21395 10.0195L7.24618 10.0432L7.26654 10.0668L7.29029 10.087C8.01138 10.7691 8.81708 11.3568 9.68784 11.8359C10.6831 12.3747 11.287 12.6295 11.6494 12.7353V12.7409C11.7557 12.773 11.8524 12.7876 11.9497 12.7876C12.2586 12.7651 12.551 12.6403 12.7803 12.4332C13.0597 12.1861 13.2965 11.8952 13.4815 11.572V11.5664C13.6551 11.2413 13.5963 10.9336 13.3458 10.7255C12.8441 10.2893 12.3016 9.90181 11.7258 9.56842C11.3401 9.3603 10.9483 9.4863 10.7894 9.69723L10.4506 10.1219C10.2771 10.3329 9.96152 10.3036 9.96152 10.3036L9.95248 10.3092C7.59959 9.7113 6.97193 7.34148 6.97193 7.34148C6.97193 7.34148 6.94253 7.01917 7.16023 6.85492L7.58433 6.51517C7.78733 6.35092 7.92869 5.96167 7.71099 5.57748C7.37816 5.00382 6.98952 4.46404 6.55067 3.96592C6.45473 3.84849 6.32013 3.76859 6.17068 3.74036L6.17181 3.74148ZM9.54365 4.40973C9.24339 4.40973 9.24339 4.86086 9.54648 4.86086C9.91984 4.86688 10.2883 4.94604 10.6309 5.09381C10.9735 5.24157 11.2835 5.45505 11.5431 5.72204C11.7799 5.98193 11.9619 6.28645 12.0783 6.61757C12.1947 6.94869 12.243 7.29968 12.2205 7.64973C12.2216 7.70897 12.2459 7.76546 12.2883 7.80709C12.3306 7.84873 12.3877 7.8722 12.4473 7.87248L12.4563 7.88429C12.5163 7.88385 12.5738 7.85995 12.6162 7.81774C12.6586 7.77554 12.6826 7.71842 12.6831 7.65873C12.7034 6.76492 12.4241 6.01511 11.8762 5.41436C11.3254 4.81361 10.557 4.47667 9.57588 4.40973H9.54365ZM9.91516 5.62248C9.60585 5.61348 9.59397 6.07361 9.90045 6.08261C10.6457 6.12086 11.0076 6.49548 11.0551 7.26611C11.0562 7.3246 11.0802 7.38037 11.122 7.42148C11.1639 7.46258 11.2202 7.48576 11.279 7.48604H11.2881C11.3183 7.48476 11.348 7.47749 11.3754 7.46466C11.4028 7.45184 11.4273 7.43372 11.4476 7.41136C11.4678 7.389 11.4834 7.36285 11.4934 7.33444C11.5034 7.30602 11.5076 7.27591 11.5058 7.24586C11.4526 6.24123 10.9019 5.67536 9.9242 5.62305H9.91516V5.62248Z'
										fill='#8304E7'
										fill-opacity='0.7'
									/>
								</g>
								<defs>
									<clipPath id='clip1'>
										<rect width='18.0947' height='18' fill='white' transform='translate(0.236328)' />
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
					<div className='email'>
						<p className='title'>Email:</p>
						<a href='mailto:info@artcode.by'>info@artcode.by</a>
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
