import React from 'react'
import { useParams } from "react-router-dom"

const profile_url = "https://lldev.thespacedevs.com/2.2.0/astronaut/?search=name"

interface IAstronaut {
  name: string,
  age: number,
  nationality: string,
  bio: string,
  agency: {
    name: string
  }
  profile_image: string
}

interface IAstronautObj {
  count: number,
  results: Array<IAstronaut>
}

function Profile() {
  const { astronautName } = useParams()
  const [astronautData, setAstronautData] = React.useState<IAstronautObj | null>(null)
  console.log(astronautData?.count)

  React.useEffect(() => {
    async function fetchAstronautData() {
      const resp = await fetch(`https://lldev.thespacedevs.com/2.2.0/astronaut/?search=${astronautName}`)
      const data = await resp.json()
      setAstronautData(data)
    }
    fetchAstronautData()
  }, [])

  if (!astronautData) {
    return (
      <div>Loading... </div>
    )
  }

  if (astronautData.count === 0) {
    return (
      <div>Your search did not return any astronauts</div>
    )
  }

  return (
    <section className="section-profile">
      {astronautData.results.map(item => {
        return <div className="profile-card">
          <div className="profile-card-text">
            <p className="profile-card-text-name">{item.name}</p>
            <p className="profile-card-text-agency">Agency: {item.agency.name}</p>
            <p >Age: {item.age}</p>
            <p >Nationality: {item.nationality}</p>
            <p>Bio: {item.bio}</p>
          </div>
          <img src={item.profile_image} alt={item.name} />
        </div>
      })
      }
    </section>
  )

}


export default Profile