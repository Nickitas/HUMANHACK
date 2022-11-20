import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Spinner from './components/UI/Spinner/Spinner'
const Home = lazy(() => import('./pages/Home/Home'))
const Services = lazy(() => import('./pages/Services/Services'))
const LiveSee = lazy(() => import('./pages/LiveSee/LiveSee'))
const Departments = lazy(() => import('./pages/Departments/Departments'))
const Accounts = lazy(() => import('./pages/Accounts/Accounts'))
const Tasks = lazy(() => import('./pages/Tasks/Tasks'))
const Notification = lazy(() => import('./pages/Notification/Notification'))
const Settings = lazy(() => import('./pages/Settings/Settings'))
const Info = lazy(() => import('./pages/Info/Info'))
const Profile = lazy(() => import('./pages/Profile/Profile'))

const App = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='services' element={<Services />}/>
          <Route path='livesee' element={<LiveSee />}/>
          <Route path='departments' element={<Departments />}/>
          <Route path='accounts' element={<Accounts />}/>
          <Route path='tasks' element={<Tasks />}/>
          <Route path='notification' element={<Notification />}/>
          <Route path='settings' element={<Settings />}/>
          <Route path='info' element={<Info />}/>
          <Route path='profile' element={<Profile />}/>
          {/* <Route path='*' element={<div>404</div>}/> */}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App