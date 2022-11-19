import React from 'react'
import { Link } from "react-router-dom"

const people_url = "http://api.open-notify.org/astros.json"

type IAstronaut = {
  name: string,
  craft: string
}

interface IPeopleData {
  message: string,
  number: string,
  people: Array<IAstronaut>
}

const full_data_api = "https://lldev.thespacedevs.com/2.2.0/astronaut/"

function People() {

  const [astronautData, setAstronautData] = React.useState<IPeopleData | null>(null)
  const [search, setSearch] = React.useState<string>('')

  const [fullData, setFullData] = React.useState(null)


  React.useEffect(() => {
    async function fetchAstronauts() {
      const resp = await fetch(people_url)
      const data = await resp.json()
      setAstronautData(data)
    }
    fetchAstronauts()
  }, [])

React.useEffect(() => { 
  async function fetchFullData() { 
    const resp = await fetch(full_data_api)
    const data = await resp.json()
    setFullData(data)
    console.log(data.count)
  }
  fetchFullData()
}, [])

const change = (event: any) => { 
  console.log(event.target.value)
  setSearch(event.target.value) 

}

  if (!astronautData) {
    return <div>loading...</div>
  }



  return (
    <section className="section-people">
      <h1 className="title">There are {astronautData.number} humans in space right now.</h1>
      <h2>Select one to find out more or search an astronaut by name. </h2>
      <div className="search-name">
          <input className="search-input" onChange={change} value={search} placeholder="eg. Armstrong"/>
            <Link to={`/profile/${search}`}>
              <button className="search-button">search</button>
            </Link>
</div>

      <div className="gallery-container">{astronautData.people.map(person => {
        return <div key={person.name} className="astronaut-card">
          <Link to={`/profile/${person.name.split(' ')[1]}`}>
            <div className="astronaut-name">
            <p>{person.name}</p>
            </div>
            <div>
              <img className="astronaut-cartoon" src="src/components/resources/astronaut_image.png" alt="" />
            </div>
            <div className="craft-name">
              <p>craft: {person.craft}</p>
            </div>
          </Link>
        </div>
      })}</div>


    </section>
  )
}

export default People