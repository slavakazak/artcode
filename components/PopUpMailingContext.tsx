import { createContext, useContext, useState, ReactNode } from 'react'

const PopUpMailingContext = createContext({
	isPopUpMailingVisible: false,
	setIsPopUpMailingVisible(state: boolean) {},
})

export const usePopUpMailing = () => useContext(PopUpMailingContext)

export const PopUpMailingProvider = ({ children }: { children: ReactNode }) => {
	const [isPopUpMailingVisible, setIsPopUpMailingVisible] = useState(false)

	return (
		<PopUpMailingContext.Provider
			value={{
				isPopUpMailingVisible,
				setIsPopUpMailingVisible,
			}}>
			{children}
		</PopUpMailingContext.Provider>
	)
}
