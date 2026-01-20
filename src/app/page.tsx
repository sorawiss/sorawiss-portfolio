import { Home } from '../sections/home'
import { Navbar } from '../sections/navbar'
import { Contact } from '../sections/contact'
import { About } from '../sections/about-me'
import Works from '../sections/works'
import PersonalProjects from '../sections/personal-projects'
import WorkImages from '../sections/work-images'


function App() {


  return (
    <div className='bg-ball-white flex flex-col items-center justify-center max-w-5xl overflow-hidden mx-auto '>
      <Navbar />
      <Home />
      <About />
      <Works />
      <WorkImages />
      <PersonalProjects />
      <Contact />
    </div>
  )
}

export default App