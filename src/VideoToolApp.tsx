import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import "./index.css";

const VideoToolApp = () => {
  return (
    <RouterProvider router={ router } />
  );
};

export default VideoToolApp;

