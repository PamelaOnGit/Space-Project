import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Tracker from "./components/Tracker"
import People from "./components/People"
import Profile from "./components/Profile"
import Launches from "./components/launches"
import LaunchInfo from "./components/LaunchInfo"





function App() {
  return <Router>
    <Navbar />
<main>
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/tracker" element={<Tracker />}/>
    <Route path="/people" element={<People />}/>
    <Route path="/profile/:astronautName" element={<Profile />}/>
    <Route path="/launches" element={<Launches />}/>
    <Route path="/launchinfo/:id" element={<LaunchInfo />} />

  </Routes>
</main>
  </Router>
}

export default App
