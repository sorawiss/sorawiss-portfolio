import { Home } from '../sections/home'
import { Navbar } from '../sections/navbar'
import { Contact } from '../sections/contact'
import { About } from '../sections/about-me'
import Works from '../sections/works'


function App() {


  return (
    <div className='bg-ball-white flex flex-col items-center justify-center max-w-5xl mx-auto '>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  )
}

export default App