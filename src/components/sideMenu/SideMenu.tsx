import { ProgressBar, SidebarMenuItem } from '..';
import { useLocation } from 'react-router-dom';

import Logo from '../../assets/fav.svg';

const sideMenuOptionsBase = [
  { to: "/dashboard", icon: "fa-solid fa-desktop", name: "Dashboard" },
  { to: "/videos", icon: "fa-regular fa-folder", name: "Videos" },
  { to: "/player", icon: "fa-regular fa-circle-play", name: "Player" },
  { to: "/analytics", icon: "fa-solid fa-chart-column", name: "Analytics" },
  { to: "/configurations", icon: "fa-solid fa-gear", name: "Configuraciones" }
];

export const SideMenu = () => {


  const location = useLocation();
  const isVideosRoute = location.pathname.includes('/videos/');


  return (
    <aside className="bg-white rounded-lg flex flex-col justify-between">

      <div className="flex flex-col h-[55%]">
        <img
          src={Logo}
          alt="logo"
          className="w-20 h-20 m-auto"
        />

        <div className="pl-2 pr-6">
          {
            sideMenuOptionsBase.map((option, index) => (
              <SidebarMenuItem
                key={index}
                to={option.to}
                icon={option.icon}
                name={option.name}
              />
            ))
          }
          {
            isVideosRoute && (
              <SidebarMenuItem
                to="/help"
                icon="fa-regular fa-circle-question"
                name="Ayuda"
              />)
          }
        </div>
      </div>

      {/* Informacion del plan */}
      <div className="bg-vt-bg-gray mx-3 mb-7 px-2 py-4 rounded-xl">
        <div className="mb-6">
          <p className="font-semibold">Mi Plan - Plus</p>
          <small className="italic">El uso se renueva el 3-may-23</small>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <span className="flex items-end justify-between">
              <p>Almacenamiento</p>
              <small className="text-xs">23.5 GB / 1 TB</small>
            </span>
            <ProgressBar progress='72' />
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <span className="flex items-end justify-between">
              <p>Banda Mensual</p>
              <small className="text-xs">23.5 GB / 1 TB</small>
            </span>
            <ProgressBar progress='59' />
          </div>
        </div>

        <button className="bg-vt-blue text-white mt-6 px-5 py-1 rounded-2xl font-semibold text-base">
          Administrar plan
        </button>
      </div>

    </aside>
  );
};