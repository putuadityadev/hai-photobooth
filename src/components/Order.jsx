import OrderCard from "../ui/OrderCard"


const Order = () => {
  return (
    <section className="h-fit w-full px-8" id="order">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:items-start">

        <div className="flex flex-col md:w-1/2 w-full items-center md:items-start">
          <h1 className="font-ubuntu font-bold text-3xl md:text-5xl">Cara Order</h1>
          <img src="/src/images/arrow-order.png" alt="arrow-order" className="hidden md:block" />
        </div>

        <div className="flex flex-col w-full items-center md:w-1/2 md:gap-4 md:items-start md:ml-20">
          <OrderCard 
            title = "Pemesanan Layanan"
            desc = "Kamu dapat melakukan pemesanan melalui situs web kami dengan mengisi formulir yang sederhana."
          />
          <OrderCard
            title= "Diskusikan Kebutuhan"
            desc="Tim kami akan menghubungi kamu untuk mendiskusikan acara dan menyesuaikan dengan tema."
          />
          <OrderCard
            title= "Selesai"
            desc="Kamu sudah punya tim photobooth yang siap memeriahkan apapun acaramu."
          />
        </div>

      </div>
    </section>
  )
}

export default Order