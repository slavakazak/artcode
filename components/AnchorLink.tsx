import { useEffect, useState } from 'react'
import Link from 'next/link'
import { smoothScrollTo } from '../lib/smoothScrollTo'

interface AnchorLinkInterface {
	children?: JSX.Element | JSX.Element[] | string
	anchor: string
	className?: string
}

export function AnchorLink({ children, anchor, className }: AnchorLinkInterface) {
	const [isSectionOnPage, setIsSectionOnPage] = useState(false)

	useEffect(() => {
		setIsSectionOnPage(document.getElementById(anchor) !== null)
	}, [anchor, isSectionOnPage])

	return (
		<>
			{isSectionOnPage ? (
				<button className={className} onClick={() => smoothScrollTo(anchor)}>
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
