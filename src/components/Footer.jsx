import { linksSocialMedia } from "../../data/maindata";


const SocialMedia = () => {
  return (
    <ul className="flex flex-col gap-2">
      {linksSocialMedia.map((link, index) => (
        <li key={index} className="flex gap-3 items-center">
          <img src={link.image} alt={link.name} />
          <h3 className="text-white font-ubuntu">{link.name}</h3>
        </li>
      ))}
    </ul>
  );
};


const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-black p-8 h-full ">
      <div className="flex flex-col gap-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-36">
          <div className="flex flex-col justify-center items-start gap-4">
            <img src="src/images/logo-white.png" alt="" />
            <p className="text-white font-ubuntu text-sm">Daftar newsletter kami untuk mendapatkan informasi terbaru tentang fitur dan rilis.</p>

            <div className="flex flex-col gap-2 md:gap-4">
              <input className="bg-black border-white border rounded-md w-full h-12 p-3 text-white font-ubuntu" type="email" placeholder="Masukan email anda"/>
              <button type="submit" className="bg-black w-full border border-white rounded-md h-12 text-white font-ubuntu text-center md:max-w-48">
                Langganan
              </button>
              <p className="text-white font-ubuntu text-xs font-thin opacity-50">Dengan berlangganan, Anda setuju dengan Kebijakan Privasi kami dan memberikan izin untuk menerima pembaruan.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-white font-ubuntu font-bold my-4">Ikuti Kami</h2>
            <SocialMedia />
          </div>
      </div>

        <hr />

        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <p className="text-white font-ubuntu text-sm underline opacity-80">Kebijakan Privasi</p>
          <p className="text-white font-ubuntu text-sm underline opacity-80">Syarat Layanan</p>
          <p className="text-white font-ubuntu text-sm underline opacity-80">Pengaturan Cookies</p>
          <p className="text-white font-ubuntu text-sm opacity-80">© 2024 Hai Photobooth. Semua hak dilindungi.</p>
        </div>
      </div>


    </footer>
  )
}

export default Footer