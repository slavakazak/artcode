import Image from 'next/image'
import Link from 'next/link'
import {
	SMALL_BREAKPOINT,
	SECOND_MEDIUM_BREAKPOINT,
	PORTFOLIO_IMAGE_WIDTH,
	PORTFOLIO_IMAGE_WIDTH_SECOND_MEDIUM,
	PORTFOLIO_IMAGE_WIDTH_SMALL,
} from '../lib/constants'

interface PortfolioCardInterface {
	className?: string
	imageSrc: string
	href?: string
	tags?: string
	title?: string
	priority?: boolean
}

export function PortfolioCard({ className, imageSrc, href, tags, title, priority }: PortfolioCardInterface) {
	return (
		<div className={'portfolio_card ' + className}>
			<Image
				src={imageSrc}
				fill
				sizes={`(max-width: ${SMALL_BREAKPOINT}px) ${PORTFOLIO_IMAGE_WIDTH_SMALL}px,
              (max-width: ${SECOND_MEDIUM_BREAKPOINT}px) ${PORTFOLIO_IMAGE_WIDTH_SECOND_MEDIUM}px,
              ${PORTFOLIO_IMAGE_WIDTH}px`}
				priority={priority}
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
