import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  icon: string;
  name: string;
}

export const SidebarMenuItem = ({ icon, name, to }: Props) => {

  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive
        ? 'flex items-center mb-4 px-4 py-2 rounded-lg text-white bg-vt-blue transition duration-300 ease-in-out'
        : 'flex items-center mb-4 px-4 py-2 rounded-lg text-black transition duration-300 ease-in-out'}
    >
      <i className={`${icon} text-2xl mr-4 ml-4`}></i>
      <div className="flex flex-col flex-grow">
        <span className='font-normal text-lg  ml-2'>
          {name}
        </span>
      </div>
    </NavLink >
  );
};