import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeProvider from '../store/ThemeContext';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/Home/Home'));
const BookingPage = lazy(() => import('./Pages/BookingPage/Booking'));
const History = lazy(() => import('./Pages/History/History'));

const AppRouter = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='booking/:roomId' element={<BookingPage />} />
            <Route path='/history' element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
