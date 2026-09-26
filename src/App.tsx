import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import Journey from './components/Journey/Journey'
import HowIWork from './components/HowIWork/HowIWork'
import Articles from './components/Articles/Articles'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <Journey />
        <HowIWork />
        <Articles />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
