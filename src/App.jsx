import './App.css'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Acadmics from './components/Acadmics/Acadmics'
import Training from './components/Training/Training'
import Implementation from './components/Implementation/Implementation'
import Plode from './components/Plode/Plode'
import AboutUs from './components/AboutUs/AboutUs'
import Labs from './components/Labs/Labs'
import Addons from './components/Addons/Addons'
import Companies from './components/Companies/Companies'

const App = () => {
  return (
    <>
      {/* <h1>Robot Website</h1> */}
      <Home/>
      <Services />
      <Acadmics />
      <Training />
      <Implementation/>
      <Labs/>
      <Addons/>
      <Companies/>
      <Plode />
      <AboutUs />
    </>
  )
}

export default App
