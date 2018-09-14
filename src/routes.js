import ListReviewPage from './pages/listReviewPage/listReviewPage';
import React from 'react';

const routes =[
    {
        path : '/',
        exact : true,
        main : () => <ListReviewPage></ListReviewPage>
    }
];

export default routes;