import ListReviewPage from './pages/listReviewPage/listReviewPage';
import React from 'react';
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';
import ReviewDetailPage from './pages/reviewDetailPage/ReviewDetailPage';

const routes =[
    {
        path : '/',
        exact : true,
        main : () => <ListReviewPage></ListReviewPage>
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
        path : '/review-detail',
        exact: false,
        main : () => <ReviewDetailPage></ReviewDetailPage>

    }
];

export default routes;