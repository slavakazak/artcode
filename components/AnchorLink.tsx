import { useEffect, useState } from 'react'
import Link from 'next/link'
import { smoothScrollTo } from '../lib/smoothScrollTo'

interface AnchorLinkInterface {
	children?: JSX.Element | JSX.Element[] | string
	anchor: string
	className?: string
	onClick?: () => void
}

export function AnchorLink({ children, anchor, className, onClick }: AnchorLinkInterface) {
	const [isSectionOnPage, setIsSectionOnPage] = useState(false)

	useEffect(() => {
		setIsSectionOnPage(document.getElementById(anchor) !== null)
	}, [anchor, isSectionOnPage])

	return (
		<>
			{isSectionOnPage ? (
				<button
					className={className}
					onClick={() => {
						smoothScrollTo(anchor)
						onClick && onClick()
					}}>
					{children}
				</button>
			) : (
				<Link href={anchor === 'main' ? '/' : '/#' + anchor} className={className}>
					{children}
				</Link>
			)}
		</>
	)
}
