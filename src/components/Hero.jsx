

const Hero = () => {
  return (
    <section className="pt-32 w-full h-screen px-8 2xl:pt-44">
      <div className="container flex flex-col z-10 md:flex-row md:w-full">
        <div className="flex flex-col gap-12 md:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="font-ubuntu font-extrabold text-[32px] leading-[120%] whitespace-nowrap sm:text-6xl  sm:text-nowrap md:text-6xl md:leading-[120%]">
              Abadikan Momen <br/> Spesial Kamu Bersama <br /> Hai Photobooth
            </h1>
            <p className="font-oswald text-xs opacity-50 text-balance sm:text-lg sm:text-wrap">
              Layanan photobooth terkece dan terlengkap di Bali. Pesan sekarang dan atur jadwalnya sesuai dan seflexsibel dengan acaramu!
            </p>
          </div>
          <div>
            <button className="bg-black text-white font-oswald font-bold text-base px-6 py-3    sm:px-14 sm:py-6 sm:rounded-2xl sm:text-xl rounded-xl border hover:bg-white hover:text-black border-blackn transition-all duration-300 ease-in-out" >Booking Sekarang!</button>
          </div>
        </div>

        <div className="-mt-52">
          <img 
            src="src/images/hero.png"
            alt="hero-image"
            className="pointer-events-none absolute left-0 right-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero