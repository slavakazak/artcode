import {
	MEDIUM_BREAKPOINT,
	SMALL_BREAKPOINT,
	HEADER_HEIGHT,
	HEADER_HEIGHT_SMALL,
	HEADER_HEIGHT_MEDIUM,
} from './constants'

export const smoothScrollTo = (id: string) => {
	let indent = HEADER_HEIGHT
	if (window.innerWidth <= SMALL_BREAKPOINT) {
		indent = HEADER_HEIGHT_SMALL
	} else if (window.innerWidth <= MEDIUM_BREAKPOINT) {
		indent = HEADER_HEIGHT_MEDIUM
	}
	const el = document.getElementById(id)
	if (el) {
		window.scrollTo({
			top: el.getBoundingClientRect().top + window.pageYOffset - indent,
			behavior: 'smooth',
		})
	}
}
