import PageShell from '../components/PageShell/PageShell'
import Journey from '../components/Journey/Journey'
import Contact from '../components/Contact/Contact'

function JourneyPage() {
  return (
    <PageShell>
      <Journey headingLevel="h1" />
      <Contact />
    </PageShell>
  )
}

export default JourneyPage
