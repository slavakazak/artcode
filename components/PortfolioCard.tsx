import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import {
	SMALL_BREAKPOINT,
	SECOND_MEDIUM_BREAKPOINT,
	PORTFOLIO_IMAGE_WIDTH,
	PORTFOLIO_IMAGE_WIDTH_SECOND_MEDIUM,
	PORTFOLIO_IMAGE_WIDTH_SMALL,
} from '../lib/constants'

interface PortfolioCardInterface {
	imageSrc: string
	href?: string
	tags?: string
	title?: string
	index?: number
}

export function PortfolioCard({ imageSrc, href, tags, title, index = 0 }: PortfolioCardInterface) {
	return (
		<div className='portfolio_card' data-animate='fadeInUp' data-mobile-animate='fadeInLeft' data-delay={index % 3}>
			<ExportedImage
				src={imageSrc}
				fill
				sizes={`(max-width: ${SMALL_BREAKPOINT}px) ${PORTFOLIO_IMAGE_WIDTH_SMALL}px,
              (max-width: ${SECOND_MEDIUM_BREAKPOINT}px) ${PORTFOLIO_IMAGE_WIDTH_SECOND_MEDIUM}px,
              ${PORTFOLIO_IMAGE_WIDTH}px`}
				priority={index < 10}
				alt='portfolio'
			/>
			<div className='inf'>
				<div className='col'>
					<p className='tags'>{tags}</p>
					<p className='title'>{title}</p>
				</div>
				{href && (
					<Link href={href} target='_blank' rel='noreferrer'>
						Смотреть
					</Link>
				)}
			</div>
		</div>
	)
}
