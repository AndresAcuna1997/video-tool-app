import { useNavigate, useParams } from 'react-router-dom';
import { CheckBoxTable } from '../components';
import { TableHeader, TableRow } from '../interfaces';

const dataRows: TableRow[] = [
  {
    name: 'Afiliado Master',
    size: '7.3 GB',
    duration: '1:30:00',
    lastModified: '30/may/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'BeMaster',
    size: '1.4 GB',
    duration: '1:30:00',
    lastModified: '22/jun/2022',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Comizzion',
    size: '284 MB',
    duration: '1:30:00',
    lastModified: '11/sep/2021',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Creador de contenido',
    size: '4.3 GB',
    duration: '1:30:00',
    lastModified: '21/jun/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Exportados Wil',
    size: '500 MB',
    duration: '1:30:00',
    lastModified: '5/abr/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Afiliado Master',
    size: '7.3 GB',
    duration: '1:30:00',
    lastModified: '30/may/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'BeMaster',
    size: '1.4 GB',
    duration: '1:30:00',
    lastModified: '22/jun/2022',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Comizzion',
    size: '284 MB',
    duration: '1:30:00',
    lastModified: '11/sep/2021',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Creador de contenido',
    size: '4.3 GB',
    duration: '1:30:00',
    lastModified: '21/jun/2023',
    icon: 'fa-regular fa-circle-play'
  },
  {
    name: 'Exportados Wil',
    size: '500 MB',
    duration: '1:30:00',
    lastModified: '5/abr/2023',
    icon: 'fa-regular fa-circle-play'
  }
];

const tableHeaders: TableHeader[] = [
  { name: 'Nombre', width: 'w-3/6', },
  { name: 'Tamaño', width: 'w-[10%]', aling: 'text-center' },
  { name: 'Duración', width: 'w-[10%]', aling: 'text-center' },
  { name: 'Última modificación', width: 'w-1/5', aling: 'text-center' }
];

export const VideosFolder = () => {

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleReturn = () => {
    navigate(-1);
  }



  return (
    <div className="p-8 h-full">
      <div className="flex gap-4 items-center">
        <button
          onClick={handleReturn}
          className="bg-vt-blue text-white rounded-xl py-3 px-4">
          <i className="fas fa-arrow-left text-2xl"></i>
        </button>

        <h1 className="text-2xl">Home / <span className="font-bold">{id} </span> </h1>
      </div>

      <div className="mt-8">
        <CheckBoxTable TableHeaders={tableHeaders} TableRows={dataRows} />
      </div>
    </div>
  );
};