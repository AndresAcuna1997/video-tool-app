import { useState } from 'react';
import { ActionBtnVideoList, CheckBoxTable, TabVideoList } from '../components';
import { TableHeader, TableRow } from '../interfaces';
import { useNavigate } from 'react-router-dom';

const dataRows: TableRow[] = [
  {
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastModified: '30/may/2023',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastModified: '22/jun/2022',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Comizzion',
    videos: 10,
    size: '284 MB',
    lastModified: '11/sep/2021',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Creador de contenido',
    videos: 2,
    size: '4.3 GB',
    lastModified: '21/jun/2023',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Exportados Wil',
    videos: 14,
    size: '500 MB',
    lastModified: '5/abr/2023',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastModified: '30/may/2023',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastModified: '22/jun/2022',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Comizzion',
    videos: 10,
    size: '284 MB',
    lastModified: '11/sep/2021',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Creador de contenido',
    videos: 2,
    size: '4.3 GB',
    lastModified: '21/jun/2023',
    icon: 'fa-regular fa-folder'
  },
  {
    name: 'Exportados Wil',
    videos: 14,
    size: '500 MB',
    lastModified: '5/abr/2023',
    icon: 'fa-regular fa-folder'
  }
];

const tableHeaders: TableHeader[] = [
  { name: 'Nombre', width: 'w-3/6', },
  { name: 'Videos', width: 'w-[10%]', aling: 'text-center' },
  { name: 'Tamaño', width: 'w-[10%]', aling: 'text-center' },
  { name: 'Última modificación', width: 'w-1/5', aling: 'text-center' }
];

export const VideoList = () => {

  const [selectedTab, setSelectedTab] = useState('Biblioteca');
  const navigate = useNavigate();

  const handleNameClick = (row: TableRow) => {
    navigate(`/videos/${row.name}`);
  }

  return (
    <div className="px-10 py-8 h-full">

      {/* Buttons and Search Bar */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <TabVideoList name={'Biblioteca'} icon={'fa-solid fa-book'} isSelected={selectedTab === 'Biblioteca'} changeTab={setSelectedTab} />
          <TabVideoList name={'Papelera'} icon={'fa-solid fa-trash-can'} isSelected={selectedTab === 'Papelera'} changeTab={setSelectedTab} />
        </div>

        <div className="flex gap-4">
          <ActionBtnVideoList name={'Nueva Carpeta'} icon={'fa-regular fa-folder'} />
          <ActionBtnVideoList name={'Nuevo Video'} icon={'fa-regular fa-circle-play'} variant={'dark'} />
        </div>
      </div>

      <form className="mt-12 h-12">
        <div className="border border-slate-300 w-2/5 h-full rounded-lg flex items-center">
          <button className="h-5/6 w-[10%] text-slate-300 text-2xl border-r-2 border-slate-300">
            <i className="fa-solid fa-search"></i>
          </button>
          <input className="ml-4 w-full focus:outline-none" type="text" placeholder="Buscar Video" />
        </div>
      </form>

      {/* Videos List */}
      <CheckBoxTable TableHeaders={tableHeaders} TableRows={dataRows} handleNameClick={handleNameClick} />

    </div>
  );
};