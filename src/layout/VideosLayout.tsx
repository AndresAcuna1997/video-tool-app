import { Outlet } from 'react-router-dom';
import { SideMenu } from '../components';

export const VideosLayout = () => {
  return (
    <div className='flex bg-vt-bg-gray w-full min-h-screen py-4 px-5 gap-4'>
      <SideMenu />

      <main className="bg-white w-full rounded-lg ">
        <Outlet />
      </main>


    </div>
  );
};