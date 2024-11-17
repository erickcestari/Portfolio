import ToogleDarkLight from './theme/ToogleDarkLight'
import NavLink from './NavLink'
import Translate from './Translate'
import Contacts from '@/components/profile/Contacts'

interface NavigationBarProps {
  dic: DictionaryType
}

const NavigationBar = (navigationBarProps: NavigationBarProps) => {
  const { dic } = navigationBarProps

  return (
    <nav className="z-10 md:block hidden">
      <div className="mx-auto flex justify-between items-center">
        <NavLink href="" name="Erick Cestari" currentLocale={dic.locale} />
        <div className="flex space-x-4 justify-between items-center">
          <NavLink href="/projects" name={dic.menu.projects} currentLocale={dic.locale} />
          <NavLink href="/blog" name="Blog" currentLocale={dic.locale} />
          <ToogleDarkLight />
          <Translate currentLanguage={dic.locale} dic={dic} />
          <Contacts title="Github" url="https://github.com/erickcestari" src="/github.svg" width={24} height={24} />
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar