import ContactCard from "../ui/ContactCard"


const Contact = () => {
  return (
    <section className="h-fit w-full px-8 overflow-hidden max-w-[1400px] mx-auto" id="contact">
      <div className="flex flex-col h-fit justify-center items-center ">
        <div className="text-center flex flex-col gap-2 mb-10">
          <h1 className="font-ubuntu font-bold text-4xl md:text-5xl">Kontak Kami</h1>
          <p className="font-oswald text-xs md:text-base opacity-70">Hubungi kami dengan berbagai pilihan cara</p>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:flex-row gap-6 md:gap-14">
          <ContactCard
            title = "Email"
            desc = "Silakan kirim email untuk pertanyaan dan pemesanan."
            info = "info@haiphotoboothbali.com"
            image = "src/images/email.png"
          />
          <ContactCard
            title = "Telepon"
            desc = "Hubungi no kami untuk informasi lebih lanjut."
            info = "+62 812 3456 7890"
            image = "src/images/phone.png"
          />
          <ContactCard
            title = "Lokasi"
            desc = "Datang langsung ke lokasi kantor kami, untuk diskusi lebih detail."
            info = "Jalan Nusantara, Kayubihi, Bangli"
            image = "src/images/map.png"
          />
         </div>
      </div>
    </section>
  )
}

export default Contact