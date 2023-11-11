import DarkLightToogle from './theme/DarkLightToogle'
import NavLink from './NavLink'
import Translate from './Translate'

const NavigationBar = () => {
  return (
    <nav className="z-10">
      <div className="mx-auto flex justify-between items-center">
        <div>
          <NavLink href="/" name="Erick Cestari" />
        </div>
        <ul className="flex space-x-4 text-black dark:text-white">
          <li>
            <NavLink href="/projects" name="Projects" />
          </li>
          <li>
            <NavLink href="/blog" name="Blog" />
          </li>
          <li>
            <DarkLightToogle />
          </li>
          <li>
            <Translate />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar