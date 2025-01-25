import Hero from "./components/Hero"
import Drag from "./components/MouseAnimation"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="relative 2xl:max-w-full 2xl:mx-[15dvw]">
      <main className="max-w-full overflow-hidden flex justify-center">
        <Drag />
        <Navbar />
        <Hero />
      </main>
    </div>
  )
}

export default App