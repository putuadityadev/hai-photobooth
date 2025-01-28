import TestiCard from "../ui/TestiCard"
import { testiData } from "../../data/maindata"

const Testimonial = () => {
  return (
    <section className="h-screen mt-52 px-8 2xl:mt-36" id="testimoni">
      <div className="text-center flex flex-col gap-1">
        <h1 className="font-ubuntu font-bold text-3xl md:text-5xl">Testimoni Pelanggan</h1>
        <p className="font-oswald text-xs opacity-80 md:text-base">Layanan photobooth yang luar biasa dan memuaskan!</p>
      </div>

      <div className="bg-[#EFEFEF] h-fit w-full flex flex-col mt-8 p-4 rounded-xl gap-10 md:flex-row md:h-48">
         {testiData.map((testi, i) => (
          <TestiCard
            key={i}
            name={testi.name}
            title={testi.title}
            testimonial={testi.testimonial}
            stars={testi.stars}
            photo={testi.photo}
          />
         ))}
      </div>
    </section>
  )
}

export default Testimonial