import { Home } from '../sections/home'
import { Navbar } from '../sections/navbar'
import { Contact } from '../sections/contact'
import { About } from '../sections/about-me'
import Works from '../sections/works'
import PersonalProjects from '../sections/personal-projects'
import WorkImages from '../sections/work-images'

function App() {
  return (
    <main className='relative overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Works />
      <PersonalProjects />
      <WorkImages />
      <Contact />
    </main>
  )
}

export default App
