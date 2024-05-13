import './App.css'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Acadmics from './components/Acadmics/Acadmics'
import Training from './components/Training/Training'
import Plode from './components/Plode/Plode'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {
  return (
    <>
      <h1>Robot Website</h1>
      <Home />
      <Services />
      <Acadmics />
      <Training />
      <Plode />
      <AboutUs />
    </>
  )
}

export default App
