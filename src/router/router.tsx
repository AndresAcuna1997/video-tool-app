import { Navigate, createBrowserRouter } from 'react-router-dom';
import { VideosLayout } from '../layout/VideosLayout';
import { VideoList, VideosFolder } from '../pages';

export const router = createBrowserRouter( [
  {
    path: '',
    element: <VideosLayout />,
    children: [
      {
        path: '/',
        element: <VideoList />
      },
      {
        path: '/:id',
        element: <VideosFolder />
      },
      {
        path: '*',
        element: <Navigate to="/" />
      },
    ]
  }
] );