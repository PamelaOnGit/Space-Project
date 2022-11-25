import React from 'react'
import { Url } from 'url'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from "leaflet"
import { Link } from "react-router-dom"


const rocket_icon = L.icon({
  iconUrl: "/rocket.png", 
  shadowUrl: "/rocket.png",
  iconSize: [60,60],
  shadowSize: [60,60], 
  className: "rocket-icon"
})

interface ILaunch {
  id: string,
  name: string,
  status: {
    name: string,
    description: string
  },
  last_updated: string,
  launch_service_provider: {
    name: string,
  },
  mission: {
    name: string,
    description: string,
  }
  pad: {
    name: string,
    wiki_url: string,
    latitude: string,
    longitude: string,
    location: {
      name: string,
      country_code: string,
    }
    map_url: string,

  }
  image: string
}

interface ILaunchData {
  results: Array<ILaunch>
}

const launch_url = "https://lldev.thespacedevs.com/2.2.0/launch/"

function Launches() {

  const [launchData, setLaunchData] = React.useState<ILaunchData | null>(null)
  console.log(launchData?.results)
  console.log(launchData?.results[0].image)

  React.useEffect(() => {
    async function fetchLaunchData() {
      const resp = await fetch(launch_url)
      const data = await resp.json()

      setLaunchData(data)
    }
    fetchLaunchData()
  }, [])



  if (!launchData) {
    return <div>Loading...</div>
  }

  return (
  <section className="section-launches">
<MapContainer center={[0,0]} zoom={2} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
<>
{launchData.results.map(item => {
  return <Marker key={item.id} position={[Number(item.pad.latitude), Number(item.pad.longitude)]} icon={ rocket_icon }>

    <Popup>
<Link to={`/launchinfo/${item.id}`}>
<p className="launch-popup">{item.name}</p>
<p className="launch-popup">{item.pad.location.country_code}</p>
<p>click here to learn more</p>
</Link>
    </Popup>
</Marker>

})}
</>
</MapContainer>
  </section>
  )
}

export default Launches