import NavigationBar from '../nav/NavigationBar';
import MobileMenu from './MobileMenu';

const Menu = () => {
  return (
    <div className="relative">
      <MobileMenu />
      <NavigationBar />
    </div>
  );
};

export default Menu;
