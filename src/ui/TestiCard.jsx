

const TestiCard = ({name, title, testimonial, stars, photo}) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="w-[30%]">
        <div className="w-full h-20 rounded-full overflow-hidden md:h-[100px] 2xl:h-[120px]">
          <img src={photo} alt="profile-photo" className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="w-[70%]">
        <div className="flex flex-col gap-2 justify-start">
            <div>
              <img src={stars} alt="stars" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-ubuntu font-light text-xs">
                &quot;{testimonial}&quot;
              </p>
              <div>
                <h1 className="font-ubuntu font-bold text-base">{name}</h1>
                <h2 className="font-ubuntu text-xs italic">{title}</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TestiCard