// import React from 'react'
// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import Teacher from './pages/Teacher'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import Home from './pages/Home'
// import RegistrationForm from './pages/RegistrationForm'
// import Login from './pages/Login'
// import MainPage from './pages/MainPage'
// import NotFoundPage from './components/NotFoundPage/NotFoundPage'
// const App = () => {
//   return (
//    <>
//    <Header />

//    <Routes>
//    <Route  path='*' element={<NotFoundPage/>} />
//     <Route  path='/' element={<Home/>} />
//     <Route  path='/Teacher' element={<Teacher/>} />
//     <Route  path='/register' element={<RegistrationForm/>} />

//     <Route  path='/login' element={<Login/>} />
//     <Route  path='/mainpage' element={<MainPage/>} />
//     {/* <Route  path='/' element={</>} /> */}
//    </Routes>

//     <Footer />

//    </>
//    )
// }

// export default App

import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Teacher from './pages/Teacher';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Register from './pages/Register';
import Log from './pages/Log';
import Personal from './pages/Personal';
import EditProfile from './components/EditProfile/Edit';

const App = () => {
  const location = useLocation();

  const isNotFoundPage = location.pathname !== '/' &&
                         location.pathname !== '/Teacher' &&
                         location.pathname !== '/register' &&
                         location.pathname !== '/login' &&
                         location.pathname !== '/MainPage';

  return (
    <>
      {!isNotFoundPage && <Header />}

      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Log />} />
        <Route path="/MainPage" element={<Personal />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>

      {!isNotFoundPage && <Footer />}
    </>
  );
};

export default App;
  