import React from 'react'
import { Link } from 'react-router-dom'
 
//   const image_url_and_key = "https://api.nasa.gov/planetary/apod?api_key=7V1IvmxoCHrRVo0jatLJZ84YiZCkaOrIC1BNGNsq&count=1"
// append &count=5 to retrieve more images for slider

// interface IImageData { 
//   date: string, 
//   explanation: string, 
//   hdurl: string
// }

// type ImageArray = Array<IImageData> 

function Home() { 

  // const [ imageArray, setImageArray ] = React.useState<Array<IImageData> | null>(null)
  // console.log(imageArray)

  // React.useEffect(() => {
  //   async function fetchImage() {
  //     const resp = await fetch(image_url_and_key)
  //     const data = await resp.json()
  //     setImageArray(data)
  //   }
  //   fetchImage()

  // }, []) 



// if (!imageArray) { 
//   return (
//     <div>Loading... </div>
//   )
// }

return (
  <div className="section-home">
<div className="home-text">
    <h1>Who's in space right now?</h1>
    <h1 className="subtitle">Track the International Space Station, find out who's on board today and follow the latest launches.</h1>

</div>
  </div>
)



  // return <div className="hero is-fullheight" >
  //   <figure className="image is-600x600">
  //        <img src={imageArray[0]?.hdurl} alt="" />
  //        <section className="is-overlay image-text">
  //          <p className="title">Humans in Space</p>
  //   <p>Date: {imageArray[0].date} <br/> {imageArray[0].explanation}</p>
  //        </section>

  //   </figure>
 
  // </div>
}


export default Home