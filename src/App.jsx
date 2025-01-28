import Features from "./components/Features"
import GalleryPhoto from "./components/GalleryPhoto"
import Hero from "./components/Hero"
import Drag from "./components/MouseAnimation"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="relative 2xl:max-w-[1400px] 2xl:mx-auto overflow-hidden">
      <Navbar />
      <main className="max-w-full overflow-hidden flex flex-col  justify-center">
        <Drag />
        <Hero />
        <Features />
        <GalleryPhoto />
      </main>
    </div>
  )
}

export default App