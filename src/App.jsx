import React from 'react'
import LandingPage from './vendorDashboard/components/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import NavBar from './vendorDashboard/components/NavBar'
import Login from './vendorDashboard/components/forms/Login'
import NotFound from './vendorDashboard/components/NotFound'

import './App.css'
const App = () => {
  return (
    <div>

<Routes>
          <Route path='/' element = {<LandingPage />}/>
          <Route path='/*' element = {<NotFound />} />
      </Routes>
    
    </div>
  )
}

export default App