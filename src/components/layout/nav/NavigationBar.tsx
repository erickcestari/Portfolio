import ToogleDarkLight from './theme/ToogleDarkLight'
import NavLink from './NavLink'
import Translate from './Translate'

const NavigationBar = () => {
  return (
    <nav className="z-10 md:block hidden">
      <div className="mx-auto flex justify-between items-center">
        <div>
          <NavLink href="/" name="Erick Cestari" />
        </div>
        <ul className="flex space-x-4 text-black dark:text-white">
          <button>
            <NavLink href="/projects" name="Projects" />
          </button>
          <button>
            <NavLink href="/blog" name="Blog" />
          </button>
          <button>
            <ToogleDarkLight />
          </button>
          <button>
            <Translate />
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar