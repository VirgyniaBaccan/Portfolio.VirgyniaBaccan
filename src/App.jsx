import './styles/reset.css'
import { Header } from './components/Header'
import { BannerSection } from './components/Sections/BannerSection'
import { AboutMeSection } from './components/Sections/AboutMeSection'
import { TechSection } from './components/Sections/TechSection'
import { ProjectsSection } from './components/Sections/ProjectsSection'
import { Footer } from './components/Footer'

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}



