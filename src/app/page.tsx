import { Home } from '../sections/home'
import { Navbar } from '../sections/navbar'
import { Contact } from '../sections/contact'
import { About } from '../sections/about-me'
import TechStack from '../sections/tech-stack'
import Works from '../sections/works'
import PersonalProjects from '../sections/personal-projects'

function App() {
  return (
    <main className='relative overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Works />
      <PersonalProjects />
      <Contact />
    </main>
  )
}

export default App
