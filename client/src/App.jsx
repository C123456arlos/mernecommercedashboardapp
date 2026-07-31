import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import ReactPlayer2 from './components/ReactPlayer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
import { useAppContext } from './context/AppContext'
import { SignIn } from '@clerk/react'
import Loading from './components/Loading'


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  const { user } = useAppContext()
  return (
    <>
      <Toaster></Toaster>
      {!isAdminRoute && <Navbar></Navbar>}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/movies/:id' element={<MovieDetails></MovieDetails>}></Route>
        <Route path='/movies/:id/:date' element={<SeatLayout></SeatLayout>}></Route>
        <Route path='/my-bookings' element={<MyBookings></MyBookings>}></Route>
        <Route path='/loading/:nextUrl' element={<Loading></Loading>}></Route>
        <Route path='/favorite' element={<Favorite></Favorite>}></Route>
        <Route path='/player' element={<ReactPlayer2></ReactPlayer2>}></Route>
        <Route path='/admin/*' element={user ? <Layout></Layout> : (<div className='min-h-screen flex justify-center items-center'>
          <SignIn fallbackRedirectUrl={'/admin'}></SignIn>
        </div>)}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='add-shows' element={<AddShows></AddShows>}></Route>
          <Route path='list-shows' element={<ListShows></ListShows>}></Route>
          <Route path='list-bookings' element={<ListBookings></ListBookings>}></Route>
        </Route>
      </Routes>

      {!isAdminRoute && <Footer></Footer>}
    </>

  )
}

export default App