import { useState } from "react"

const Navbar = () => {
  const [menuButton, setMenuButton] = useState(false);

  const handleMenuToggle = () => {
    console.log('test')
    !menuButton ? setMenuButton(true) : setMenuButton(false);
  }

  return (
    <nav className="flex flex-col w-full fixed lg:px-[16dvw]">
      <div className=" container flex justify-between pt-6 px-8 items-center min-w-full">
        <div className="flex gap-3">
          <div className="md:hidden" onClick={handleMenuToggle}>
            <img 
            className="h-10"
              src="/src/images/Menu.png"
              alt="menu"
            />
          </div>
          <img
          className="h-10 md:h-14"
            src="/src/images/logo.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className="hidden md:flex gap-12 font-ubuntu text-lg">
            <li className="font-bold">Beranda</li>
            <li className="text-secondary-0">Tentang Kami</li>
            <li className="text-secondary-0">Layanan</li>
            <li className="text-secondary-0">Galeri Foto</li>
            <li className="text-secondary-0">Kontak</li>
          </ul>
        </div>
        <button className="px-8 py-[9px] border-black border rounded-xl font-oswald font-bold text-base hover:bg-black hover:text-white transition-all duration-300 ease-out">
          Booking
        </button>
      </div>
      <hr className="h-px mt-6 bg-gray-200 border-0 dark:bg-gray-700 md:hidden" ></hr>
      <div className={`bg-black h-full w-full fixed top-0 left-0 z-50 ${menuButton ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-500 ease-in-out`}>
        <ul className="text-white flex flex-col gap-20 font-ubuntu text-6xl ml-8 mt-5">
          <img src="/src/images/Close Window.png" alt="close" width={80} onClick={handleMenuToggle}/>
          <li className="font-bold text-white">Beranda</li>
          <li className="text-secondary-0">Tentang Kami</li>
          <li className="text-secondary-0">Layanan</li>
          <li className="text-secondary-0">Galeri Foto</li>
          <li className="text-secondary-0">Kontak</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar