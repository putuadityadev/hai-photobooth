

const ContactCard = ({title, desc, info, image}) => {
  return (
    <div className="flex flex-col items-center border p-4 w-full rounded-xl">
      <div>
        <img 
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col text-center max-w-52">
        <h1 className="font-ubuntu font-bold text-2xl">{title}</h1>
        <p className="font-ubuntu text-xs text-wrap opacity-50">{desc}</p>
      </div>
      <h2 className="font-oswald font-semibold text-lg mt-3">{info}</h2>
    </div>
  )
}

export default ContactCard