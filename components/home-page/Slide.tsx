interface SlideInterface {
	title: string
	text: string
	h1?: boolean
}

export function Slide({ title, text, h1 = false }: SlideInterface) {
	return (
		<div className='slide'>
			{h1 ? <h1>{title}</h1> : <h2>{title}</h2>}
			<p>{text}</p>
		</div>
	)
}
