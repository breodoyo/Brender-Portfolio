import PageShell from '../components/PageShell/PageShell'
import Articles from '../components/Articles/Articles'
import Contact from '../components/Contact/Contact'

function ArticlesPage() {
  return (
    <PageShell>
      <Articles headingLevel="h1" />
      <Contact />
    </PageShell>
  )
}

export default ArticlesPage
