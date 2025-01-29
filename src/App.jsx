import CallToAction from "./components/CallToAction"
import Features from "./components/Features"
import GalleryPhoto from "./components/GalleryPhoto"
import Hero from "./components/Hero"
import Drag from "./components/MouseAnimation"
import Navbar from "./components/Navbar"
import Order from "./components/Order"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <div className="relative 2xl:max-w-[1400px] 2xl:mx-auto overflow-hidden">
      <Navbar />
      <main className="max-w-full overflow-hidden flex flex-col  justify-center">
        <Drag />
        <Hero />
        <Features />
        <GalleryPhoto />
        <Testimonial />
        <Order />
        <CallToAction />
      </main>
    </div>
  )
}

export default App