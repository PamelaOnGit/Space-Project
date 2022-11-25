import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
 
const messageArray = ["?","w","o","n"," ","t","h","g","i","r"," ","e","c","a","p","s"," ","n","i"," ","s","'","o","h","W"]
const subtitleArray = "Track the International Space Station, find out who's on board today and follow the latest launches.".split('').reverse() 



function Home() { 

  const [string, setString] = React.useState<string>("")
  const [seconds, setSeconds] = React.useState(1); 
  const [isActive, setIsActive] = React.useState(true)
  console.log(seconds, isActive)
  console.log(messageArray[messageArray.length - seconds])
  console.log(string)

  function toggle() { 
    setIsActive(!isActive)
  }
  
  function reset() { 
    setSeconds(0)
    setIsActive(false)
  }

  React.useEffect(() => { 
    let interval:any = null
    // if (isActive) {
      if (seconds <= messageArray.length) {
      interval = setInterval(() => { 
        setSeconds(seconds => seconds + 1)
        setString(string => string + messageArray[messageArray.length - seconds] )
      }, 300)
    // } else if (!isActive && seconds !== 0) { 
    } else {
      clearInterval(interval)
    }
    return ()  => clearInterval(interval)
      }, [isActive, seconds])
 



return (
  <div className="section-home">
<div className="home-text">
    <h1>{string}<span className="blink">_</span></h1>
    <h1 className="subtitle">Track the International Space Station, find out who's on board today and follow the latest launches.</h1>

</div>
  </div>
)


}


export default Home