import { useState } from 'react';

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, phone, startDate, endDate } = formData;
    const message = `*Booking Hai Photobooth*\n\n` +
                    `Detail Pemesanan:\n` +
                    `- Nama: ${name}\n` +
                    `- Alamat: ${address}\n` +
                    `- No HP: ${phone}\n` +
                    `- Tanggal Mulai: ${startDate}\n` +
                    `- Tanggal Selesai: ${endDate}\n\n` +
                    `Kami siap membantu Anda membuat momen spesial lebih berkesan.`;
    const waNumber = '6281775121848';
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(waLink, '_blank');
    onClose(); // Menutup form setelah pengiriman
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Form Booking</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Alamat"
            value={formData.address}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="No HP"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 mb-4 w-full rounded"
          />
          <label className="block mb-2">Tanggal Rencana Booking:</label>
          <div className="flex space-x-2 mb-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
              Batal
            </button>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm; 