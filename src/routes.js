import ListReviewPage from './pages/listReviewPage/listReviewPage';
import React from 'react';
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';

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
    }
];

export default routes;