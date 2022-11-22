import React from 'react' 
import { useParams } from 'react-router-dom'

const launch_url = "https://lldev.thespacedevs.com/2.2.0/launch/"

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


function LaunchInfo() { 
  const { id } = useParams()
  console.log(id)
  const [launchData, setLaunchData] = React.useState<ILaunch| null>(null)
  console.log(launchData)

  React.useEffect(() => {
    async function fetchLaunchData() { 
      const resp = await fetch(`https://lldev.thespacedevs.com/2.2.0/launch/${id}/`)
      const data = await resp.json()
      setLaunchData(data)
    }
    fetchLaunchData()
  }, [])

if (!launchData) { 
  return <div>Loading... </div>
}

  return (
  <div className="section-launch-info">
    <div className="launch-info-card">
      <div className="launch-info-text">
      <div className="launch-info-name">name: {launchData.name}</div> 
    <p>Launch Service Provider: {launchData.launch_service_provider.name}</p>
   <p>Launch Pad: {launchData.pad.name}</p>
   <p>Last updated: {launchData.last_updated}</p>
   <p>Status: {launchData.status.name}</p>
   <p>Mission: {launchData.mission.description}</p>
   </div>
   <img src={launchData.image} alt={launchData.name} />
    </div>





    </div>
  )
}

export default LaunchInfo