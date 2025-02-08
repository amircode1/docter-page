import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { Phone } from "lucide-react"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useState } from "react"

// ایجاد آیکون سفارشی برای مارکر
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function LocationCard() {
  const [showNumber, setShowNumber] = useState(false);
  const phoneNumbers = ['021-44556677', '021-44515651'];

  // مختصات مکان (این مقادیر را با مختصات واقعی جایگزین کنید)
  const position = [35.7219, 51.3347]

  return (
    <div className="max-w-4xl mx-auto mb-4" dir="rtl">
      <div className="bg-[#38356a] rounded-3xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1 space-y-2">
            <h2 className="text-xl">مطب زعفرانیه</h2>
            <div className="inline-flex items-center gap-1">
              <p className="text-white font-semibold">تهران،</p>
              <p className="text-gray-300">سعادت آباد، میدان کاج، خیابان بهزاد، کوچه ۱ پلاک ۲ طبقه دوم</p>
            </div>
            <div>
              <button 
                onClick={() => setShowNumber(!showNumber)}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4 ml-2" />
                <span>{showNumber ? 'پنهان کردن شماره' : 'نمایش شماره'}</span>
              </button>
              
              {showNumber && (
                <div className="mt-2 pr-6 flex flex-row gap-2">
                  {phoneNumbers.map((number) => (
                    <p 
                      key={number}
                      className="font-bold text-sm text-[#317AF1]"
                    >
                      {number}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/3 h-32 w-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon} />
            </MapContainer>
            <style jsx="true" data-global="true">{`
              .leaflet-control-attribution {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard;
