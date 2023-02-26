import { usePopUp } from './PopUpContext'

interface JobCardInterface {
	index: number
	title: string
	text: () => JSX.Element
}

export function JobCard({ index, title, text }: JobCardInterface) {
	const { openPopUp } = usePopUp()
	return (
		<div className='card' data-animate={index % 2 ? 'fadeInRight' : 'fadeInLeft'} data-mobile-animate='fadeInLeft'>
			<h2>Требуется {title}</h2>
			<p>{text()}</p>
			<div className='respond' onClick={() => openPopUp(title)}>
				Отозваться
			</div>
		</div>
	)
}
