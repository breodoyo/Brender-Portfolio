import About from './components/About'
import Hero from './components/Hero'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
