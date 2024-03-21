interface Props {
  name: string;
  icon: string;
  isSelected?: boolean;
  changeTab?: ( name: string ) => void;
}

export const TabVideoList = ( { name, icon, isSelected, changeTab }: Props ) => {
  return (
    <button
      onClick={ () => changeTab && changeTab( name ) }
      className={ `px-4 py-2 tracking-[.05rem] h-11 ${ isSelected && 'border-b-4 text-vt-blue border-vt-blue font-semibold' } transition-all duration-150 ease-in-out` }>
      <i className={ `${ icon } mr-2` }></i>
      { name }
    </button>
  );
};