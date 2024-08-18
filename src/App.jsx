
import { Newspaper } from 'lucide-react'
import { AccordionVariant } from './components/Accordation'
import { CardPass } from './components/CardPass'
import Cta from './components/Cta'
import Faq from './components/Faq'
import { Feature } from './components/Feature'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import Pathners from './components/Pathners'
import Princing from './components/Pricing'
import SingleTestomonial from './components/SingleTestomonial'
import Speakers from './components/Speakers'
import Stats from './components/stats'
import { TestoCard } from './components/TestoCard'
import { VideFeedBck } from './components/videFeedBck'
import What from './components/What'
import NewsLetter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
   {/* <Nav/> */}
   <Hero/>
   <Stats/>
   <VideFeedBck/>
   <What/>
   <AccordionVariant/>
   <Speakers/>
   <Feature/>
   <Pathners/>
   <CardPass/>
   <SingleTestomonial/>
    <Gallery/>
    <Princing/>
    <TestoCard/>
    <Cta/>
    <Faq/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default App
