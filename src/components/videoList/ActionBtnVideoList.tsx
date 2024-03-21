interface Props {
  name: string;
  icon: string;
  variant?: 'light' | 'dark';
}

export const ActionBtnVideoList = ( { name, icon, variant = "light" }: Props ) => {

  return (
    <button className={ `px-4 py-2 rounded-lg ${ variant === 'dark' ? 'bg-vt-blue text-white' : 'bg-slate-100' }` }>
      <i className={ `${ icon } mr-2` }></i>
      { name }
    </button>
  );
};