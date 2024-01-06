import NavigationBar from '../nav/NavigationBar';
import MobileMenu from './MobileMenu';

interface MenuProps {
  dic: DictionaryType
}

const Menu = (menuProps: MenuProps) => {
  return (
    <div className="relative">
      <MobileMenu dic={menuProps.dic} />
      <NavigationBar dic={menuProps.dic} />
    </div>
  );
};

export default Menu;
