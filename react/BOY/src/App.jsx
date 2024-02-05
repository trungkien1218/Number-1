import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Section6 from './component/Section6'
import Section5 from './component/Section5'
import Section7 from './component/Section7'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  )
}

export default App
