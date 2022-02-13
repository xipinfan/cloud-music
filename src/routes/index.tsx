import React from 'react';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import RanK from '../application/Rank';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'singers',
        element: <Singers />
      },
      {
        path: 'rank',
        element: <RanK />
      }
    ]
  }
];

export default routes;
