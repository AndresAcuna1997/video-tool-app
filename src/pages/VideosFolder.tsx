import { CheckBoxTable } from '../components';
import { TableHeader, TableRow } from '../interfaces';

const dataRows: TableRow[] = [
  {
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastModified: '30/may/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastModified: '22/jun/2022',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Comizzion',
    videos: 10,
    size: '284 MB',
    lastModified: '11/sep/2021',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Creador de contenido',
    videos: 2,
    size: '4.3 GB',
    lastModified: '21/jun/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Exportados Wil',
    videos: 14,
    size: '500 MB',
    lastModified: '5/abr/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastModified: '30/may/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastModified: '22/jun/2022',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Comizzion',
    videos: 10,
    size: '284 MB',
    lastModified: '11/sep/2021',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Creador de contenido',
    videos: 2,
    size: '4.3 GB',
    lastModified: '21/jun/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Exportados Wil',
    videos: 14,
    size: '500 MB',
    lastModified: '5/abr/2023',
    icon: 'fa-regular fa-circle-play'
  }
];

const tableHeaders: TableHeader[] = [
  { name: 'Nombre', width: 'w-3/6', },
  { name: 'Videos', width: 'w-[10%]', aling: 'text-center' },
  { name: 'Tamaño', width: 'w-[10%]', aling: 'text-center' },
  { name: 'Última modificación', width: 'w-1/5', aling: 'text-center' }
];

export const VideosFolder = () => {
  return (
    <div className="p-8 h-full">
      <div className="flex gap-4 items-center">
        <button className="bg-vt-blue text-white rounded-xl py-3 px-4">
          <i className="fas fa-arrow-left text-2xl"></i>
        </button>

        <h1 className="text-2xl">Home / <span className="font-bold">BeMaster </span> </h1>
      </div>

      <div className="mt-8">
        <CheckBoxTable TableHeaders={ tableHeaders } TableRows={ dataRows } />
      </div>
    </div>
  );
};