import { createContext, useContext, useState, ReactNode } from 'react'

const PopUpContext = createContext({
	isPopUpVisible: false,
	openPopUp(title?: string) {},
	closePopUp() {},
	selectedRadio: '',
	setSelectedRadio(text: string) {},
})

export const usePopUp = () => useContext(PopUpContext)

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
	const [isPopUpVisible, setIsPopUpVisible] = useState(false)
	const [selectedRadio, setSelectedRadio] = useState('')

	const openPopUp = (title?: string) => {
		setSelectedRadio(title || '')
		setIsPopUpVisible(true)
	}
	const closePopUp = () => setIsPopUpVisible(false)

	return (
		<PopUpContext.Provider
			value={{
				isPopUpVisible,
				openPopUp,
				closePopUp,
				selectedRadio,
				setSelectedRadio,
			}}>
			{children}
		</PopUpContext.Provider>
	)
}
