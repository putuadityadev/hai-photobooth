import CallToAction from "./components/CallToAction"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import GalleryPhoto from "./components/GalleryPhoto"
import Hero from "./components/Hero"
import Drag from "./components/MouseAnimation"
import Navbar from "./components/Navbar"
import Order from "./components/Order"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <main className=" overflow-hidden flex flex-col  justify-center">
        <Drag />
        <Hero />
        <Features />
        <GalleryPhoto />
        <Testimonial />
        <Order />
        <CallToAction />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App