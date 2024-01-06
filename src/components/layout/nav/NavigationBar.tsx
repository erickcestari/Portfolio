import ToogleDarkLight from './theme/ToogleDarkLight'
import NavLink from './NavLink'
import Translate from './Translate'

interface NavigationBarProps {
  dic: DictionaryType
}

const NavigationBar = (navigationBarProps: NavigationBarProps) => {
  const {dic} = navigationBarProps
  return (
    <nav className="z-10 md:block hidden">
      <div className="mx-auto flex justify-between items-center">
        <div>
          <NavLink href="/" name="Erick Cestari" />
        </div>
        <ul className="flex space-x-4 text-black dark:text-white">
          <button>
            <NavLink href="/projects" name={dic.menu.projects} />
          </button>
          <button>
            <NavLink href="/blog" name="Blog" />
          </button>
          <button>
            <ToogleDarkLight />
          </button>
          <div>
            <Translate />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar