import { cardImageData } from "../../data/maindata"
import PhotoCard from "../ui/PhotoCard"
import { useState } from "react";


const GalleryPhoto = () => {

  const [cards, setCards] = useState(cardImageData);

  const handleActiveOrder = (id) => {

    const updateCard = cards.map((card) =>
      card.id === id 
        ? { ...card, isActive: true } 
        : { ...card, isActive: false } 
    );

    setCards(updateCard);
  }


  return (
    <section  className="relative h-screen text-black md:pt-12 mb-10 px-8 " id="Gallery Photo">
      <div className="mt-8 px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col justify-start max-w-[313px] md:max-w-fit gap-2">
          <h1 className="text-white font-ubuntu text-4xl font-bold md:text-5xl">Gallery Photo</h1>
          <p className="font-oswald text-white text-xs opacity-50 text-balance">Lihat koleksi momen berharga di photobooth kami.</p>
        </div>

        <div className="mt-20">
          <div className="flex flex-col md:min-w-full md:flex-row gap-14 md:gap-x-[24vw] 2xl:gap-x-[21vw] 2xl:gap-y-[13vw] md:gap-y-[16vw] relative flex-wrap justify-start">
            {cards.map((card) => (
              <PhotoCard
                key={card.id}
                image={card.image}
                isActive={card.isActive}
                id={card.id}
                onClick={() => handleActiveOrder(card.id)}
              />
            ))}

            <div className=" h-fit absolute -right-20 -z-10 -top-20 md:hidden">
              <img src="src/images/elipse.png"alt="circle" className=""/>
            </div>
          </div>

          <div>

          </div>


        </div>

      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 -z-20 ">
        <img
          src="src/images/bg-large.png"
          alt="background"
          className="h-[100dvh] md:w-screen  2xl:h-full"
        />
      </div>
    </section>
  )
}

export default GalleryPhoto