const how = [
	{
		title: 'Заявка',
		text: 'Оставьте заявку на нашем сайте или напишите нам в социальных сетях.',
	},
	{
		title: 'Бриф',
		text: 'Мы вышлем вам список вопросов, который поможет лучше понять какого результата вы ожидаете.',
	},
	{
		title: 'Предварительный дизайн',
		text: 'На этом этапе подбирается стиль и структура сайта, подходящие вам больше всего.',
	},
	{
		title: 'Утверждение дизайна',
		text: 'После разработки макета сайта он согласуется с заказчиком, чтобы можно было приступить к его технической реализации.',
	},
	{
		title: 'Вёрстка',
		text: 'Дизайн-макет переносится в HTML-код, по итогу чего получается полностью рабочий и адаптированный под разные устройства сайт.',
	},
	{
		title: 'Дополнительный функционал',
		text: 'Заключительный этап, на котором может быть добавлена система управления контентом и другие заранее оговоренные возможности сайта.',
	},
]

export function HowSection() {
	return (
		<section id='how'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h2>Как мы работаем?</h2>
						<ul>
							{how.map((item, i) => (
								<li key={i} className='mov2 m_mov2'>
									<span className='num'>{(i < 9 ? '0' : '') + (i + 1)}</span>
									<div className='line'></div>
									<div className='text'>
										<h3>{item.title}</h3>
										<p className='description'>{item.text}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className='col'>
						<div className='paralax'>ARTCODE</div>
					</div>
				</div>
			</div>
		</section>
	)
}
