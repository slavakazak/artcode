import { MainLayout } from '../components/MainLayout'
import { MainSection } from '../components/home-page/MainSection'
import { ServicesSection } from '../components/home-page/ServicesSection'
import { HowSection } from '../components/home-page/HowSection'
import { AboutSection } from '../components/home-page/AboutSection'
import { PortfolioSection } from '../components/home-page/PortfolioSection'
import { Footer } from '../components/Footer'

export default function Index() {
	return (
		<MainLayout>
			<MainSection />
			<ServicesSection />
			<HowSection />
			<AboutSection />
			<PortfolioSection />
			<Footer />
		</MainLayout>
	)
}
