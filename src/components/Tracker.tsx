import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from "leaflet"

const tracker_url_and_key = "https://cryptic-everglades-76066.herokuapp.com/http://api.open-notify.org/iss-now.json"

const issMarker = L.icon({
  iconUrl: "/iss_logo.png", 
  shadowUrl: "/iss_logo.png",
  iconSize: [40,40],
  shadowSize: [40,40], 
  className: "iss-icon"
})



interface ILocation {
  longitude: string,
  latitude: string
}

interface ITrackerData {
  timestamp: number,
  iss_position: ILocation
}

function Tracker() {

  const [trackerData, updateTrackerData] = React.useState<ITrackerData | null>(null)
  console.log(Number(trackerData?.iss_position.latitude))
  console.log(Number(trackerData?.iss_position.longitude))


  async function fetchTrackerData() {
    const resp = await fetch(tracker_url_and_key)
    const data = await resp.json()
    updateTrackerData(data)
  }

  React.useEffect(() => {
    fetchTrackerData()

    const intervalId = setInterval(() => { 
      fetchTrackerData()
    }, 5000) 

return () => clearInterval(intervalId)

  }, [])






if (!trackerData) { 
  return (
    <div>Loading...</div>
  )
}


  return <div  className="section-tracker">
<MapContainer center={[Number(trackerData?.iss_position.latitude), Number(trackerData?.iss_position.longitude)]} zoom={4} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[Number(trackerData?.iss_position.latitude), Number(trackerData?.iss_position.longitude)]}
  icon={ issMarker }>
  </Marker>
</MapContainer>
  </div>
}

export default Tracker