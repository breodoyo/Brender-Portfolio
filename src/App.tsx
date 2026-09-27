import PageShell from './components/PageShell/PageShell'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import HowIWork from './components/HowIWork/HowIWork'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'

// Journey and Articles live on their own pages (/journey.html, /articles.html).
function App() {
  return (
    <PageShell>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <HowIWork />
      <Resume />
      <Contact />
    </PageShell>
  )
}

export default App
