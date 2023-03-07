import { useState, useRef, useEffect } from 'react'
import Slider, { Settings } from 'react-slick'
import { Slide } from './Slide'
import { SMALL_BREAKPOINT } from '../../lib/constants'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
	{
		title: 'РАЗРАБОТКА САЙТОВ',
		text: 'Разработка и поддержка корпоративных сайтов с уникальным дизайном для решения бизнес-задач и формирования позитивного имиджа вашего бренда.',
		h1: true,
	},
	{
		title: 'Дизайн',
		text: 'Анализируем ваш бизнес и на основе этого делаем уникальный и современный дизайн.',
	},
	{
		title: 'Landing page',
		text: 'Разработаем качественный одностраничный сайт для успешной рекламной компании.',
	},
	{
		title: 'Сайт-визитка',
		text: 'Разработаем небольшой сайт из одной или нескольких страниц для привлечения клиентов.',
	},
]

const FULL_LINE_WIDTH = 660

const LINE_WIDTH = FULL_LINE_WIDTH / slides.length

interface MainSliderInterface {
	children?: JSX.Element | JSX.Element[]
}

export function MainSlider({ children }: MainSliderInterface) {
	const [width, setWidth] = useState(0)

	const handleWindowResize = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		handleWindowResize()
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	const sliderEl = useRef<Slider>(null)
	const [currentSlide, setCurrentSlide] = useState(0)

	const settings: Settings = {
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		fade: true,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slider',
		beforeChange: (current: number, next: number) => setCurrentSlide(next),
	}

	return (
		<>
			<Slider ref={sliderEl} {...settings}>
				{slides.map((slide, i) => (
					<Slide key={i} {...slide} />
				))}
			</Slider>
			{children}
			<div className='dots'>
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => sliderEl.current?.slickGoTo(i)}
						className={'dot' + (currentSlide === i ? ' active' : '')}
						style={{ width: width > SMALL_BREAKPOINT ? LINE_WIDTH + 'px' : '31px' }}
						aria-label={'Слайд ' + (i + 1)}
					/>
				))}
				<span className='number'>{(currentSlide < 9 ? '0' : '') + (currentSlide + 1)}</span>
				<div className='full_line' style={{ width: FULL_LINE_WIDTH + 'px' }}>
					<div className='line' style={{ marginLeft: currentSlide * LINE_WIDTH + 'px', width: LINE_WIDTH + 'px' }} />
				</div>
			</div>
		</>
	)
}
