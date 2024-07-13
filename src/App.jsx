import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  
  return (
    <div className='min-h-screen pt-12 md:pt-20 lg:pt-24 bg-slate-900 font-serif '>
      <div className='mx-6 md:mx-12 lg:mx-28 lg:grid grid-cols-2  '>
        <div className="lg:fixed">
          <Header />
        </div>
        <div className='lg:relative left-[40vw] lg:ml-8'>
          <About />
          <Skills/>
          <Projects/>
        </div>
      </div>
    </div>
  )
}

export default App
