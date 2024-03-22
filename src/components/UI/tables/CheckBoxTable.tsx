import { TableHeader, TableRow } from '../../../interfaces';

interface Props {
  TableHeaders: TableHeader[];
  TableRows: TableRow[];
  handleNameClick?: (row: TableRow) => void;
}

export const CheckBoxTable = ({ TableHeaders, TableRows, handleNameClick }: Props) => {

  return (
    <table className="mt-8 w-full">
      <thead>
        <tr className="h-12 border-b border-slate-200">
          <th className="w-[4%]">
            <input type="checkbox" />
          </th>
          {
            TableHeaders.map(({ name, width, aling }, index) => (
              <th key={index} className={`font-semibold ${aling ? aling : 'text-start'} ${width ? width : ''}`}>{name}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          TableRows.map((row, index) => (
            <tr key={index} className="h-12 border-b border-slate-200 hover:bg-slate-400 hover:bg-opacity-10">
              <td
                className="text-center">
                <input type="checkbox" />
              </td>
              <td
                onClick={handleNameClick ? () => handleNameClick(row) : () => { }}
                className="hover:cursor-pointer">
                <i className={`mr-4 text-vt-blue text-xl ${row.icon}`}></i>
                {row.name}
              </td>
              {
                row.videos &&
                <td className="text-center">{row.videos}</td>
              }
              {
                row.size &&
                <td className="text-center">{row.size}</td>
              
              }
              {
                row.duration &&
                <td className="text-center">{row.duration}</td>
              }
              <td className="text-center">{row.lastModified}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};