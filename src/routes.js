import HotelList from './pages/hotelList';
import React from 'react';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ReviewDetailPage from './pages/reviewDetailPage';
import Homepage from './pages/homepage';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Homepage></Homepage>
    },
    {
        path : '/search',
        exact : true,
        main : () => <HotelList></HotelList>
    },
    {
        path: '/login',
        exact: false,
        main : () => <LoginPage></LoginPage>
    },
    {
        path : '/register',
        exact: false,
        main: () => <RegisterPage></RegisterPage>
    },
    {
        path : '/review-detail/:id', 
        exact: false,
        main : () => <ReviewDetailPage ></ReviewDetailPage>

    }
];

export default routes;