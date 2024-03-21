import { SidebarMenuItem } from '..';
import Logo from '../../assets/fav.svg';

const sideMenuOptions = [
  { to: "/dashboard", icon: "fa-solid fa-desktop", name: "Dashboard", isBold: true },
  { to: "/", icon: "fa-regular fa-folder", name: "Videos" },
  { to: "/player", icon: "fa-regular fa-circle-play", name: "Player" },
  { to: "/analytics", icon: "fa-solid fa-chart-column", name: "Analytics" },
  { to: "/configurations", icon: "fa-solid fa-gear", name: "Configuraciones" }
];

export const SideMenu = () => {
  return (
    <aside className="bg-white rounded-lg flex flex-col justify-between">

      {/* Logo y Menu */ }
      {/* //TODO: FIX HEIGHT AND CENTER LOGO */ }
      <div className="flex flex-col h-[55%]">
        <img
          src={ Logo }
          alt="logo"
          className="w-20 h-20 m-auto"
        />

        <div className="pl-2 pr-6">
          {
            sideMenuOptions.map( ( option, index ) => (
              <SidebarMenuItem
                key={ index }
                to={ option.to }
                icon={ option.icon }
                name={ option.name }
                isBold={ option.isBold }
              />
            ) )
          }
        </div>
      </div>

      {/* Informacion del plan */ }
      {/* //TODO: FIX COLOR OF BAR (MUS BE VT-BLUE) */ }
      <div className="bg-slate-100 mx-3 mb-7 px-2 py-4 rounded-xl">
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
            <progress value="75" max="100" className="max-h-2 w-full rounded bg-blue-300 bg-opacity-20"> 75% </progress>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <span className="flex items-end justify-between">
              <p>Banda Mensual</p>
              <small className="text-xs">23.5 GB / 1 TB</small>
            </span>
            <progress value="66" max="100" className="max-h-2 w-full rounded bg-blue-300 bg-opacity-20"> 66% </progress>
          </div>
        </div>

        <button className="bg-vt-blue text-white mt-6 px-5 py-1 rounded-2xl font-semibold text-base">
          Administrar plan
        </button>
      </div>

    </aside>
  );
};