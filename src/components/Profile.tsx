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
  results: Array<IAstronaut>
}

function Profile() {
  const { astronautName } = useParams()
  const [astronautData, setAstronautData] = React.useState<IAstronautObj | null>(null)
  console.log(astronautData?.results[0].name)

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

  return (
    <section className="section-profile">
    <div className="profile-container">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={astronautData?.results[0].profile_image} alt={astronautData?.results[0].name} />
          </figure>
<div className="card-content">
       <h1 className="title is-4">{astronautData?.results[0].name}</h1>
       <h2 className="subtitle is-5">Agency: {astronautData?.results[0].agency.name}</h2>
        <p className="subtitle is-6">Age: {astronautData?.results[0].age}</p>
        <p className="subtitle is-6">Nationality: {astronautData?.results[0].nationality}</p>
</div>
<div className="content">
        <p>Bio: {astronautData?.results[0].bio}</p>
</div>

        </div>
 





      </div>
    </div>
    </section>
  )

}


export default Profile