import ToogleDarkLight from './theme/ToogleDarkLight'
import NavLink from './NavLink'
import Translate from './Translate'

interface NavigationBarProps {
  dic: DictionaryType
}

const NavigationBar = (navigationBarProps: NavigationBarProps) => {
  const { dic } = navigationBarProps

  return (
    <nav className="z-10 md:block hidden">
      <div className="mx-auto flex justify-between items-center">
        <NavLink href="" name="Erick Cestari" currentLocale={dic.locale} />
        <div className="flex space-x-4">
          <NavLink href="/projects" name={dic.menu.projects} currentLocale={dic.locale} />
          <NavLink href="/blog" name="Blog" currentLocale={dic.locale} />
          <ToogleDarkLight />
          <Translate currentLanguage={dic.locale} dic={dic} />
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar