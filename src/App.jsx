import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="relative 2xl:max-w-full 2xl:mx-[15dvw]">
      <main className="max-w-full overflow-hidden flex justify-center">
        <Navbar />
        <Hero />
      </main>
    </div>
  )
}

export default App