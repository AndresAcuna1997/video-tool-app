import { Navigate, createBrowserRouter } from 'react-router-dom';
import { VideosLayout } from '../layout/VideosLayout';
import { VideoList, VideosFolder } from '../pages';

export const router = createBrowserRouter([
  {
    path: '',
    element: <VideosLayout />,
    children: [
      {
        path: 'videos',
        element: <VideoList />
      },
      {
        path: 'videos/:id',
        element: <VideosFolder />
      },
      {
        path: '*',
        element: <Navigate to="/videos" />
      },
    ]
  }
]);